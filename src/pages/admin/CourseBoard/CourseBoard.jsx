import React, { useContext, useEffect, useState } from "react";
import { deleteCoursesAPI, getCoursesApi } from "../../../api/courses.api";
import { Table, Tag, Input } from "antd";
import { useDispatch } from "react-redux";
import "./courseBoard.scss";
import { AlertMessage } from "../../../App";
import {
  handleGetAllCourses,
  handleSetCourses,
} from "../../../redux/slices/course.slice";
import { useNavigate } from "react-router-dom";
import paths from "../../../paths";

const CourseBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { handleAlert } = useContext(AlertMessage);
  const [arrCourse, setArrCourse] = useState([]);
  const [searchCourse, setSearchCourse] = useState([]);

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCoursesApi()
      .then((res) => {
        console.log(res);
        setArrCourse(res);
        dispatch(handleGetAllCourses(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // SEARCH
  const removeVietnameseTones = (str) => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/\s/g, "");
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      " "
    );
    return str;
  };
  let arrNewCourse = [];
  const onSearch = (nameCourse) => {
    getCoursesApi()
      .then((res) => {
        res.map((item, index) => {
          let value = removeVietnameseTones(
            item.tenKhoaHoc.toLowerCase().trim()
          );

          let value2 = removeVietnameseTones(nameCourse.toLowerCase().trim());
          console.log(value2);
          let data = value.includes(value2);
          if (data) {
            arrNewCourse.push(item);
            setSearchCourse(arrNewCourse);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // COLUMN
  const column = [
    {
      title: "Mã Khoá Học",
      dataIndex: "maKhoaHoc",
      render: (text) => {
        return <p className="font-bold">{text}</p>;
      },
      // Sắp xếp theo mã khoá học
      sorter: (a, b) => {
        return a.maKhoaHoc.length - b.maKhoaHoc.length;
      },
      sortDirection: ["descend"],
    },
    {
      title: "Tên Khoá Học",
      dataIndex: "tenKhoaHoc",
    },
    {
      title: "Số Lượng",
      dataIndex: "soLuongHocVien",
    },
    {
      title: "Danh Mục",
      dataIndex: "danhMucKhoaHoc",
      render: (text) => {
        return <p>{text.tenDanhMucKhoaHoc}</p>;
      },
    },

    {
      title: "Lượt Xem",
      dataIndex: "luotXem",
      render: (text) => {
        if (text >= 1000) {
          return (
            <Tag className="text-white font-bold bg-orange-700">{text}</Tag>
          );
        } else if (text >= 100) {
          return (
            <Tag className="text-yellow-500 font-bold bg-orange-700">
              {text}
            </Tag>
          );
        } else {
          return (
            <Tag className="text-[#FFFAE6] font-bold bg-orange-700">{text}</Tag>
          );
        }
      },
    },
    {
      title: "Chức Năng",
      render: (text, record) => {
        return (
          <div className="flex space-x-2">
            <button
              onClick={() => {
                handleDelete(text.maKhoaHoc);
              }}
              className="text-red-700"
            >
              <i className="fa-regular fa-trash"></i>
            </button>

            <button
              onClick={() => {
                dispatch(handleSetCourses(record));
                navigate(`${paths.ADMIN}/course-manager`);
              }}
              className="text-blue-700"
            >
              <i className="fa-regular fa-pen-to-square"></i>
            </button>
          </div>
        );
      },
    },
  ];

  // DELETE
  const handleDelete = (maKH) => {
    deleteCoursesAPI(maKH)
      .then((res) => {
        handleAlert("success", res);
        searchCourse.splice(0, searchCourse.length);
        // setSearchCourse(searchCourse);
        console.log(searchCourse);
        getCourses();
      })
      .catch((err) => {
        console.log(err);
        handleAlert("error", "Khóa học đã ghi danh học viên không thể xóa!");
      });
  };

  return (
    <section className="course-board rounded-lg p-4 space-y-3">
      <div className="space-y-5">
        <h1 className="text-5xl font-medium text-orange-800">Courses</h1>
        <Input
          placeholder="Tên Khoá Học"
          onChange={(event) => {
            onSearch(event.target.value);
          }}
          className="p-2"
        />
      </div>

      {arrCourse && searchCourse == false ? (
        <Table
          loading="true"
          className=""
          columns={column}
          dataSource={arrCourse}
        />
      ) : (
        searchCourse && (
          <Table
            loading="true"
            className=""
            columns={column}
            dataSource={searchCourse}
          />
        )
      )}
    </section>
  );
};

export default CourseBoard;
