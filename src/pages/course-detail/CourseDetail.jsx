// eslint-disable-next-line no-unused-vars
import React, { useCallback, useEffect, useState } from "react";
import ImgDetail from "../../../public/image/img-detail.png";
import BannerImg from "./imgs/banner-img.png";
import Tab from "./components/tabs";
import ReferenceCourse from "./components/referenceCourses/ReferenceCourse";
import { useParams } from "react-router-dom";
import { getCourseDetailApi } from "../../api/courses.api";

const CourseDetail = () => {
  let { courseId } = useParams();
  const [courseDetail, setCourseDetail] = useState(null);
  console.log(courseDetail);

  const getCourseDetail = useCallback(async () => {
    if (!courseId) {
      return;
    }
    try {
      const res = await getCourseDetailApi(courseId);
      setCourseDetail(res);
    } catch (error) {
      alert(500);
    }
  }, [courseId]);

  useEffect(() => {
    getCourseDetail();
  }, [getCourseDetail]);

  return (
    <section className="course-detail bg-[#000927] container-custom">
      <div className="text-[#E8E2FF] mb-5 text-[32px] font-bold pt-10">
        <p>{courseDetail?.tenKhoaHoc}</p>
      </div>
      <div className=" py-5 lg:flex lg:gap-7">
        {/* detail-left */}
        <div className="lg:basis-0 lg:grow-[2]">
          {/* title  */}
          <div>
            <div>
              <img
                src={courseDetail?.hinhAnh}
                alt=""
                style={{ width: "100%" }}
              />
            </div>
            <div className="my-10 leading-6">
              <p className="text-[#8E88A8] text-[25px] font-bold">
                THÔNG TIN KHÓA HỌC
              </p>
              <p className="text-[#8E88A8] text-[15px] font-light">
                TIẾN LÊN VÀ KHÔNG CHẦN CHỪ !!!
              </p>
            </div>
          </div>
          {/* tab  */}
          <div>
            <Tab courseDetail={courseDetail} />
          </div>
        </div>
        {/* detail-right  */}
        <div className="mt-10 lg:mt-0 lg:basis-0 lg:grow-[1]">
          <div>
            {/* Thong tin khoa hoc  */}
            <div className="bg-[#0F1C43] p-7 mb-10">
              <div className="flex gap-1 items-center">
                <i className="fa-sharp fa-solid fa-bolt text-[#FF7700] text-[40px] me-3"></i>
                <p className="text-white text-[25px]">500.000</p>
                <sup className="text-white">đ</sup>
              </div>
              {/* button  */}
              <div className="text-[#FF7700] text-[24px] border-solid border-2 py-2 text-center my-10 cursor-pointer hover:bg-[#FF7700] hover:text-white hover:border-[#FF7700]">
                ĐĂNG KÝ
              </div>
              {/* Info  */}
              <div>
                {/* Ghi danh */}
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <span className="text-[#E8E2FF] me-2">Ghi danh:</span>
                    <span className="text-white text-[16px]">
                      {courseDetail?.soLuongHocVien} hoc vien
                    </span>
                  </div>
                  <div>
                    <i className="fa-solid fa-user-graduate text-[20px] text-[#FF7700]"></i>
                  </div>
                </div>
                {/* Thoi Gian  */}
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <span className="text-[#E8E2FF] me-2">Thời gian:</span>
                    <span className="text-white text-[16px]">18 giờ</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-clock text-[20px] text-[#FF7700]"></i>
                  </div>
                </div>
                {/* Bai hoc  */}
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <span className="text-[#E8E2FF] me-2">Bài học:</span>
                    <span className="text-white text-[16px]">10</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-book text-[20px] text-[#FF7700]"></i>
                  </div>
                </div>
                {/* Video  */}
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <span className="text-[#E8E2FF] me-2">Video:</span>
                    <span className="text-white text-[16px]">14</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-photo-film text-[20px] text-[#FF7700]"></i>
                  </div>
                </div>
                {/* Trinh do  */}
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <span className="text-[#E8E2FF] me-2">Trình độ:</span>
                    <span className="text-white text-[16px]">
                      Người mới bắt đầu
                    </span>
                  </div>
                  <div>
                    <i className="fa-solid fa-database text-[20px] text-[#FF7700]"></i>
                  </div>
                </div>
                <input
                  type="text"
                  placeholder="Nhập mã"
                  className="w-full h-8 bg-transparent border-2 border-[#8E88A8] px-2"
                />
              </div>
            </div>
            {/* Quang cao  */}
            <div className="bg-[#0F1537] text-white p-7">
              <div className="text-[30px] font-bold">EDUMA</div>
              <div className="text-[35px] font-semibold my-5">
                Newest Template
              </div>
              <div className="text-[16px] font-light leading-6">
                Create a landing page for this course to maximize conversion.
              </div>
              <div className="my-5">
                <img
                  src={BannerImg}
                  alt=""
                  style={{ height: "200px", width: "300px" }}
                />
              </div>

              <span className="inline-block bg-[#FF7701] border-1 border-solid px-7 py-4 hover:bg-[#F94C10] cursor-pointer">
                Try For Free
              </span>
            </div>
          </div>
        </div>
      </div>

      <ReferenceCourse
        maDanhMuc={courseDetail?.danhMucKhoaHoc?.maDanhMucKhoahoc}
      />
    </section>
  );
};

export default CourseDetail;
