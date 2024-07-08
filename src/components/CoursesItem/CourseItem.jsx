import { useEffect, useState } from "react";
import { coursesApi } from "../../api/courses.api.js";
import { useNavigate, useParams } from "react-router-dom";
import "./courseItem.scss";

const CourseItem = () => {
  const { courseCategory } = useParams();
  // console.log(courseCategory);
  const [arrCourses, setArrCourses] = useState([]);
  const navigate = useNavigate();
  // console.log(arrCourses);
  useEffect(() => {
    coursesApi
      .getCoursesByCategory(courseCategory)
      .then((res) => {
        // console.log(res);
        setArrCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [courseCategory]);
  return (
    <div className="courseItem__container">
      <div className="courseItem__banner">
        <div className="courseBanner__item">
          <div className="courseBanner__title">{courseCategory}</div>
          <hr className="mt-0 mb-4" />
        </div>
      </div>
      <div className="courseItem__item w-[1170px] mx-auto">
        <div className="courseItem__title ">
          <h3 className="text-white text-5xl  font-bold mt-20">
            {courseCategory}
          </h3>
          <div className="flex items-center text-[#8e88a8] my-6">
            <div className="mr-5">
              <i className="fa-solid fa-book-open mr-2"></i>
              <span>3+ Free Courses</span>
            </div>
            <div>
              <i className="fa-regular fa-user mr-2"></i>
              <span>200+ Student</span>
            </div>
          </div>
          <p className="text-[#8e88a8] leading-6">
            Embark on a journey of knowledge and skill development with our
            online course marketplace. Discover a diverse array of expert-led
            courses designed to empower and enrich your learning experience.
            From professional development to personal growth, explore our
            curated selection of online courses that cater to your unique
            aspirations.
          </p>
        </div>
        <div className="course__show grid grid-cols-4 gap-8 mt-20">
          {arrCourses.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  navigate(`/courses/detail/${item.maKhoaHoc}`);
                }}
              >
                <div className="mt-7">
                  <img
                    className="w-full h-[200px]"
                    src={item.hinhAnh}
                    alt="course"
                  />
                </div>
                <div className="flex justify-between text-[#8e88a8] mt-5">
                  <div>
                    {item.soLuongHocVien}
                    <span>Students</span>
                  </div>
                  <div>{item.ngayTao}</div>
                </div>
                <p className="text-[#e8e2ff] font-bold text-xl my-3">
                  {item.tenKhoaHoc}
                </p>
                <p className="text-[#8e88a8] line-clamp-4">{item.moTa}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
