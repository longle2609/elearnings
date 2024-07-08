import React, { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import InputText from "../../../components/Input/InputText.jsx";
import { DatePicker, Rate } from "antd";
import dayjs from "dayjs";
import "./courseManager.scss";
import { addCourseAPI } from "../../../api/courses.api.js";
import { AlertMessage } from "../../../App.jsx";
import { useSelector } from "react-redux";
import * as Yup from "yup";

const CourseManager = () => {
  const { courses } = useSelector((reducer) => {
    return reducer.course;
  });
  const { handleAlert } = useContext(AlertMessage);
  const [img, setImg] = useState("");
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [feeling, setFeeling] = useState(0);
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
    setValues,
    setTouched,
    isValid,
  } = useFormik({
    initialValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: "",
      maNhom: "GP01",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: "",
    },
    onSubmit: (values) => {
      console.log(values);
      addCourseAPI
        .addCourseAPI({ ...values, luotXem: 0, maNhom: "GP01" })
        .then((res) => {
          console.log(res);
          handleAlert("success", "Thêm Thành Công");
        })
        .catch((err) => {
          handleAlert("error", err.response.data);
          console.log(err);
        });
    },
    validationSchema: Yup.object({
      maKhoaHoc: Yup.string()
        .required("Vui lòng không để trống")
        .min(5, "Vui lòng nhập tối thiểu 5 ký tự"),
      biDanh: Yup.string().required("Vui lòng không để trống"),
      tenKhoaHoc: Yup.string().required("Vui lòng không để trống"),
      moTa: Yup.string().required("Vui lòng không để trống"),
      hinhAnh: Yup.string()
        .required("Vui lòng không để trống")
        .matches(/\.(jpeg|jpg|gif|png|bmp)$/i, "Hình ảnh không đúng định dạng"),
      ngayTao: Yup.string().required("Vui lòng không để trống"),
      maDanhMucKhoaHoc: Yup.string().required("Vui lòng không để trống"),
      taiKhoanNguoiTao: Yup.string().required("Vui lòng không để trống"),
    }),
  });

  // Edit
  useEffect(() => {
    let newCourses = {};
    for (let key in courses) {
      if (key == "danhMucKhoaHoc" || key == "nguoiTao") {
        const obj = courses[key];
        for (let index in obj) {
          // console.log(Object.keys(obj)[0]);
          // console.log(obj[Object.keys(obj)[0]]);
          // console.log(index);
          // console.log(maDanhMuc);
          if (key == "danhMucKhoaHoc") {
            newCourses = {
              ...courses,
              maDanhMucKhoaHoc: obj[Object.keys(obj)[0]],
              taiKhoanNguoiTao: courses.nguoiTao.taiKhoan,
            };
          }
        }
      }
    }
    if (newCourses) {
      setValues(newCourses);
    }

    if (courses.hinhAnh) {
      setImg(courses.hinhAnh);
    }
  }, [courses]);

  // Update
  const handleUpdateCourse = () => {
    const objectTouched = {};
    const props = ["danhMucKhoaHoc", "nguoiTao"];

    for (let key in values) {
      objectTouched[key] = true;
    }

    console.log(isValid);
    if (isValid) {
      props.forEach((item) => {
        if (item in values) {
          delete values[item];
        }
      });
      console.log(values);
      addCourseAPI
        .updateCourseAPI({ ...values, maNhom: "GP01" })
        .then((res) => {
          console.log(res);
          handleAlert("success", "Cập nhật thành công");
        })
        .catch((err) => {
          console.log(values);
          console.log(err);
        });
    }
  };

  console.log(touched);

  return (
    <section className="course-manager m-2">
      <div className="rounded-lg bg-white border-2 border-solid border-orange-200">
        <form className="" action="" onSubmit={handleSubmit}>
          <h1 className="text-5xl p-3 font-semibold text-orange-800">
            Course Manager
          </h1>
          <div className="p-5 grid grid-cols-2 gap-4">
            {/* Mã Khoá Học */}
            <InputText
              label="Mã Khoá Học"
              name="maKhoaHoc"
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Mã Khoá Học"
              value={values.maKhoaHoc}
              error={errors.maKhoaHoc}
              touched={touched.maKhoaHoc}
            />

            {/* Tên Khoá Học */}
            <InputText
              label="Tên Khoá Học"
              name="tenKhoaHoc"
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Tên Khoá Học"
              value={values.tenKhoaHoc}
              error={errors.tenKhoaHoc}
              touched={touched.tenKhoaHoc}
            />

            {/* Mã Danh Mục */}
            <InputText
              label="Mã Danh Mục"
              name="maDanhMucKhoaHoc"
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Mã Danh Mục"
              value={values.maDanhMucKhoaHoc}
              error={errors.maDanhMucKhoaHoc}
              touched={touched.maDanhMucKhoaHoc}
            />

            {/* Tài Khoản Người Tạo */}
            <InputText
              label="Người Tạo"
              name="taiKhoanNguoiTao"
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Người Tạo"
              value={values.taiKhoanNguoiTao}
              error={errors.taiKhoanNguoiTao}
              touched={touched.taiKhoanNguoiTao}
            />

            {/* Bí Danh */}
            <InputText
              label="Bí Danh"
              name="biDanh"
              handleChange={handleChange}
              handleBlur={handleBlur}
              placeholder="Bí Danh"
              value={values.biDanh}
              error={errors.biDanh}
              touched={touched.biDanh}
            />

            {/* Ngày Tạo */}
            <div className="flex flex-col space-y-2 my-1">
              <label htmlFor="" className="font-medium">
                Ngày tháng
              </label>
              <DatePicker
                name="ngayTao"
                format="DD/MM/YYYY"
                value={
                  values.ngayTao ? dayjs(values.ngayTao, "DD/MM/YYYY") : null
                }
                onBlur={handleBlur}
                onChange={(date, dateString) => {
                  console.log(dateString);
                  setFieldValue("ngayTao", dayjs(date).format("DD/MM/YYYY"));
                }}
              />
              {touched.ngayTao == true && errors.ngayTao && (
                <p className="text-red-500 text-xs">{errors.ngayTao}</p>
              )}
            </div>

            {/* Mô Tả */}
            <div className="flex flex-col space-y-2 col-span-2">
              <label htmlFor="" className="font-medium">
                Mô tả
              </label>
              <textarea
                className="p-3 rounded-lg border bg-gray-50 outline-orange-500 outline-1 border-gray-300"
                placeholder="Mô tả"
                value={values.moTa}
                onChange={handleChange}
                onBlur={handleBlur}
                name="moTa"
                id=""
                cols={30}
                rows={10}
              ></textarea>
              {touched.moTa == true && errors.moTa && (
                <p className="text-red-500 text-xs">{errors.moTa}</p>
              )}
            </div>

            {/* Hình Ảnh */}
            <div className="flex flex-col space-y-2 col-span-2">
              <label htmlFor="" className="font-medium">
                Thêm Hình Ảnh
              </label>
              {img && <img src={img} className="w-[200px] h-[200px]" alt="" />}

              <input
                type="file"
                name="hinhAnh"
                accept="image/*"
                onBlur={handleBlur}
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  let img = event.target.files[0];
                  if (img) {
                    const imgURL = URL.createObjectURL(img);
                    console.log(`${imgURL}.png`);
                    setImg(imgURL);
                    setFieldValue("hinhAnh", `${imgURL}.png`);
                  }
                }}
              />
              {touched.hinhAnh == true && errors.hinhAnh && (
                <p className="text-red-500 text-xs">{errors.hinhAnh}</p>
              )}
            </div>

            {/* Button */}
            <div className="space-x-2">
              {/* SUBMIT */}
              <button
                type="submit"
                className="py-3 px-7 text-sm bg-orange-500 text-black font-medium rounded"
              >
                Submit
              </button>

              {/* UPDATE */}
              <button
                type="button"
                onClick={() => {
                  handleUpdateCourse();
                }}
                className="py-3 px-7 text-sm bg-yellow-500 text-black font-medium rounded"
              >
                Update
              </button>
            </div>

            {/* Lượt Xem */}
            {/* <InputText
            label="Lượt xem"
            name="luotXem"
            type="number"
            handleChange={handleChange}
            handleBlur={handleBlur}
            placeholder="Lượt xem"
            value={values.luotXem}
            error={errors.luotXem}
            touched={touched.luotXem}
            min={0}
          /> */}

            {/* Đánh Giá */}
            {/* <div className="flex flex-col space-y-3 my-1">
            <label htmlFor="" className="font-medium">
              Đánh giá
            </label>
            <Rate tooltips={desc} onChange={setFeeling} value={feeling} />
            {feeling ? <span>{desc[feeling - 1]}</span> : null}
          </div> */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default CourseManager;
