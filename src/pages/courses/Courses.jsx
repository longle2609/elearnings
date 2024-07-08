import React, { useCallback, useEffect, useState } from "react";
// import Content from "./components/Content";
import { getCourseListApi } from "../../api/courses.api";
import { useNavigate } from "react-router-dom";
import Content from "../course-detail/components/referenceCourses/components/Content";
import "./courses.scss";

const Courses = () => {
  const [pagination, setPagination] = useState({ page: 1, totalPages: 0 });
  const [courseList, setCourseList] = useState([]);
  const navigate = useNavigate();

  const getCourseList = useCallback(async () => {
    const res = await getCourseListApi(pagination.page);

    setCourseList(res.items);
    setPagination((prev) => ({ ...prev, totalPages: res.totalPages }));
  }, [pagination.page]);

  const handleOnclick = useCallback(
    (maKhoaHoc) => {
      navigate(`/courses/detail/${maKhoaHoc}`);
    },
    [navigate]
  );

  const handleChangePage = useCallback((type) => {
    setPagination((prev) => {
      if (type === "next" && prev.page < prev.totalPages) {
        return { ...prev, page: prev.page + 1 };
      }
      if (type === "prev" && prev.page > 1) {
        return { ...prev, page: prev.page - 1 };
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    getCourseList();
  }, [getCourseList, pagination.page]);
  return (
    <section className="courses">
      <div className="blog__banner">
        <div className="blogBanner__item">
          <div className="blogBanner__title">COURSES</div>
          <hr className="mt-0 mb-4" />
        </div>
      </div>
      <div className="bg-[#000927] text-[#E8E2FF] container-custom">
        {/* <h1 className="text-[48px] mb-2">KHÓA HỌC</h1> */}
        <p className="invisible">BẮT ĐẦU HÀNH TRÌNH NÀO!!!</p>
        {/* item  */}
        <div className="my-7 md:flex md:flex-wrap md:items-stretch">
          <div className="md:basis-1/3 lg:basis-1/6 ">
            <div className="p-2 h-full ">
              <div className="border-2 border-solid border-[#1f3064] px-7 py-5 text-center h-full flex flex-col justify-between">
                <i className="fa-light fa-laptop text-[30px] text-[#8e88a8]"></i>
                <p className="font-bold text-[20px] my-4">CHƯƠNG TRÌNH HỌC</p>
                <p className="text-[20px] text-[#8e88a8]">300</p>
              </div>
            </div>
          </div>
          <div className="md:basis-1/3 lg:basis-1/6 ">
            <div className="p-2 h-full ">
              <div className="border-2 border-solid border-[#1f3064] px-7 py-5 text-center h-full flex flex-col justify-between">
                <i className="fa-light fa-camera text-[30px] text-[#8e88a8]"></i>
                <p className="font-bold text-[20px] my-4">NHÀ SÁNG TẠO</p>
                <p className="text-[20px] text-[#8e88a8]">10000</p>
              </div>
            </div>
          </div>
          <div className="md:basis-1/3 lg:basis-1/6 ">
            <div className="p-2 h-full ">
              <div className="border-2 border-solid border-[#1f3064] px-7 py-5 text-center h-full flex flex-col justify-between">
                <i className="fa-light fa-briefcase text-[30px] text-[#8e88a8]"></i>
                <p className="font-bold text-[20px] my-4">NHÀ THIẾT KẾ</p>
                <p className="text-[20px] text-[#8e88a8]">400</p>
              </div>
            </div>
          </div>
          <div className="md:basis-1/3 lg:basis-1/6 ">
            <div className="p-2 h-full ">
              <div className="border-2 border-solid border-[#1f3064] px-7 py-5 text-center h-full flex flex-col justify-between">
                <i className="fa-light fa-book text-[30px] text-[#8e88a8]"></i>
                <p className="font-bold text-[20px] my-4">BÀI GIẢNG</p>
                <p className="text-[20px] text-[#8e88a8]">3000</p>
              </div>
            </div>
          </div>
          <div className="md:basis-1/3 lg:basis-1/6 ">
            <div className="p-2 h-full ">
              <div className="border-2 border-solid border-[#1f3064] px-7 py-5 text-center h-full flex flex-col justify-between">
                <i className="fa-light fa-circle-play text-[30px] text-[#8e88a8]"></i>
                <p className="font-bold text-[20px] my-4">VIDEO</p>
                <p className="text-[20px] text-[#8e88a8]">40000</p>
              </div>
            </div>
          </div>
          <div className="md:basis-1/3 lg:basis-1/6">
            <div className="p-2 h-full ">
              <div className="border-2 border-solid border-[#1f3064] px-7 py-5 text-center h-full flex flex-col justify-between">
                <i className="fa-light fa-dice-d20 text-[30px] text-[#8e88a8]"></i>
                <p className="font-bold text-[20px] my-4">LĨNH VỰC</p>
                <p className="text-[20px] text-[#8e88a8]">200</p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[20px] mb-4">Danh sách khóa học</p>
        <div className="md:flex flex-wrap">
          {courseList.map((item) => {
            return (
              <div
                key={item.maKhoaHoc}
                className="md:px-4 md:basis-1/2 lg:basis-1/4 lg:max-w-[calc(100%/4)]"
                onClick={() => {
                  const { maKhoaHoc = "" } = item;
                  if (maKhoaHoc) {
                    handleOnclick(maKhoaHoc);
                  }
                }}
              >
                <Content course={item} />
              </div>
            );
          })}
        </div>
        {/* button  */}
        <div className="text-center">
          <i
            className="fa-solid fa-chevron-left text-[25px] border-solid border-2 border-[#1f3064] px-4 py-3 me-7 cursor-pointer hover:text-[#ff7700]"
            onClick={() => {
              handleChangePage("prev");
            }}
          ></i>
          <i
            className="fa-solid fa-chevron-right text-[25px] border-solid border-2 border-[#1f3064] px-4 py-3 cursor-pointer hover:text-[#ff7700]"
            onClick={() => {
              handleChangePage("next");
            }}
          ></i>
        </div>
      </div>
    </section>
  );
};

export default Courses;
