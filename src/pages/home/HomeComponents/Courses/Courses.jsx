import { useCallback, useEffect, useState } from "react";
import "./courses.scss";
import { coursesApi } from "../../../../api/courses.api";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link, NavLink, useNavigate } from "react-router-dom";

// Thiết kế lại mũi tên trong react slick
const PrevArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div className={className} style={style} onClick={onClick}>
      <i className="fa-solid fa-angle-left"></i>
    </div>
  );
};

// Thiết kế lại mũi tên trong react slick
const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <i className="fa-solid fa-angle-right"></i>
    </div>
  );
};

// Setting React Slick List Courses
const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  dots: true,
  centerPadding: "60px",
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Courses = () => {
  const [courseBE, setCourseBE] = useState([]);
  // console.log(courseBE);
  const [courseDesign, setCourseDesign] = useState([]);
  // console.log(courseDesign);
  const [courseDiDong, setCourseDiDong] = useState([]);
  // console.log(courseDiDong);
  const [courseFE, setCourseFE] = useState([]);
  // console.log(courseFE);
  const [courseFullStack, setCourseFullStack] = useState([]);
  // console.log(courseFullStack);
  const [courseTuDuy, setCourseTuDuy] = useState([]);
  // console.log(courseTuDuy);

  const navigate = useNavigate();

  useEffect(() => {
    getCoursesCate("BackEnd", setCourseBE);
    getCoursesCate("Design", setCourseDesign);
    getCoursesCate("DiDong", setCourseDiDong);
    getCoursesCate("FrontEnd", setCourseFE);
    getCoursesCate("FullStack", setCourseFullStack);
    getCoursesCate("TuDuy", setCourseTuDuy);
  }, []);

  // Hàm lấy dữ liệu Khóa học qua Danh mục
  const getCoursesCate = (cate, setState) => {
    return coursesApi
      .getCoursesByCategory(cate)
      .then((res) => {
        // console.log(res.data);
        setState(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOnclick = useCallback(
    (maKhoaHoc) => {
      navigate(`/courses/detail/${maKhoaHoc}`);
    },
    [navigate]
  );

  return (
    <div className="courses__container">
      <div className="courses__backEnd">
        <div className=" courses__title">
          <h2 className="text-white text-5xl font-bold leading-10">BackEnd</h2>
          <Link className="courses__viewAll text-[#31d7a9] font-bold text-3xl">
            View All
          </Link>
        </div>
        <div className="courses__item mt-14">
          <Slider {...settings}>
            {courseBE?.map((item, index) => {
              return (
                <div key={index} onClick={handleOnclick}>
                  <div className="h-56">
                    <img
                      className="w-full h-full object-cover"
                      src={item.hinhAnh}
                      alt="course"
                    />
                  </div>
                  <div className="text-2xl font-bold mt-6">
                    <h3 className="line-clamp-2">{item.tenKhoaHoc}</h3>
                  </div>
                  <div className="flex my-5 text-[#8e88a8] font-semibold">
                    <div>
                      <i className="fa-regular fa-user"></i>
                      <span>{item.soLuongHocVien} Students</span>
                    </div>
                    <span className="mx-6">|</span>
                    <div>
                      <i className="fa-regular fa-clock"></i>
                      <span>{item.ngayTao}</span>
                    </div>
                  </div>
                  <div>
                    <p className="line-clamp-3 text-[#8e88a8] font-light leading-5">
                      {item.moTa}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="courses__design mt-32">
        <div className=" courses__title">
          <h2 className="text-white text-5xl font-bold leading-10">Design</h2>
          <Link className="courses__viewAll text-[#31d7a9] font-bold text-3xl">
            View All
          </Link>
        </div>
        <div className="courses__item mt-14">
          <Slider {...settings}>
            {courseDesign?.map((item, index) => {
              return (
                <div key={index} onClick={handleOnclick}>
                  <div className="h-56">
                    <img
                      className="w-full h-full object-cover"
                      src={item.hinhAnh}
                      alt="course"
                    />
                  </div>
                  <div className="text-2xl font-bold mt-6">
                    <h3 className="line-clamp-2">{item.tenKhoaHoc}</h3>
                  </div>
                  <div className="flex my-5 text-[#8e88a8] font-semibold">
                    <div>
                      <i className="fa-regular fa-user"></i>
                      <span>{item.soLuongHocVien} Students</span>
                    </div>
                    <span className="mx-6">|</span>
                    <div>
                      <i className="fa-regular fa-clock"></i>
                      <span>{item.ngayTao}</span>
                    </div>
                  </div>
                  <div>
                    <p className="line-clamp-3 text-[#8e88a8] font-light leading-5">
                      {item.moTa}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="courses__didong mt-32">
        <div className=" courses__title">
          <h2 className="text-white text-5xl font-bold leading-10">Di Dong</h2>
          <Link className="courses__viewAll text-[#31d7a9] font-bold text-3xl">
            View All
          </Link>
        </div>
        <div className="courses__item mt-14">
          <Slider {...settings}>
            {courseDiDong?.map((item, index) => {
              return (
                <div key={index} onClick={handleOnclick}>
                  <div className="h-56">
                    <img
                      className="w-full h-full object-cover"
                      src={item.hinhAnh}
                      alt="course"
                    />
                  </div>
                  <div className="text-2xl font-bold mt-6">
                    <h3 className="line-clamp-2">{item.tenKhoaHoc}</h3>
                  </div>
                  <div className="flex my-5 text-[#8e88a8] font-semibold">
                    <div>
                      <i className="fa-regular fa-user"></i>
                      <span>{item.soLuongHocVien} Students</span>
                    </div>
                    <span className="mx-6">|</span>
                    <div>
                      <i className="fa-regular fa-clock"></i>
                      <span>{item.ngayTao}</span>
                    </div>
                  </div>
                  <div>
                    <p className="line-clamp-3 text-[#8e88a8] font-light leading-5">
                      {item.moTa}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="courses__frontEnd mt-32">
        <div className=" courses__title">
          <h2 className="text-white text-5xl font-bold leading-10">
            Front End
          </h2>
          <Link className="courses__viewAll text-[#31d7a9] font-bold text-3xl">
            View All
          </Link>
        </div>
        <div className="courses__item mt-14">
          <Slider {...settings}>
            {courseFE?.map((item, index) => {
              return (
                <div key={index} onClick={handleOnclick}>
                  <div className="h-56">
                    <img
                      className="w-full h-full object-cover"
                      src={item.hinhAnh}
                      alt="course"
                    />
                  </div>
                  <div className="text-2xl font-bold mt-6">
                    <h3 className="line-clamp-2">{item.tenKhoaHoc}</h3>
                  </div>
                  <div className="flex my-5 text-[#8e88a8] font-semibold">
                    <div>
                      <i className="fa-regular fa-user"></i>
                      <span>{item.soLuongHocVien} Students</span>
                    </div>
                    <span className="mx-6">|</span>
                    <div>
                      <i className="fa-regular fa-clock"></i>
                      <span>{item.ngayTao}</span>
                    </div>
                  </div>
                  <div>
                    <p className="line-clamp-3 text-[#8e88a8] font-light leading-5">
                      {item.moTa}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="courses__fullStack mt-32">
        <div className=" courses__title">
          <h2 className="text-white text-5xl font-bold leading-10">
            Full Stack
          </h2>
          <Link className="courses__viewAll text-[#31d7a9] font-bold text-3xl">
            View All
          </Link>
        </div>
        <div className="courses__item mt-14">
          <Slider {...settings}>
            {courseFullStack?.map((item, index) => {
              return (
                <div key={index} onClick={handleOnclick}>
                  <div className="h-56">
                    <img
                      className="w-full h-full object-cover"
                      src={item.hinhAnh}
                      alt="course"
                    />
                  </div>
                  <div className="text-2xl font-bold mt-6">
                    <h3 className="line-clamp-2">{item.tenKhoaHoc}</h3>
                  </div>
                  <div className="flex my-5 text-[#8e88a8] font-semibold">
                    <div>
                      <i className="fa-regular fa-user"></i>
                      <span>{item.soLuongHocVien} Students</span>
                    </div>
                    <span className="mx-6">|</span>
                    <div>
                      <i className="fa-regular fa-clock"></i>
                      <span>{item.ngayTao}</span>
                    </div>
                  </div>
                  <div>
                    <p className="line-clamp-3 text-[#8e88a8] font-light leading-5">
                      {item.moTa}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="courses__tuDuy mt-32">
        <div className=" courses__title">
          <h2 className="text-white text-5xl font-bold leading-10">Tu Duy</h2>
          <Link className="courses__viewAll text-[#31d7a9] font-bold text-3xl">
            View All
          </Link>
        </div>
        <div className="courses__item mt-14">
          <Slider {...settings}>
            {courseTuDuy?.map((item, index) => {
              return (
                <div key={index} onClick={handleOnclick}>
                  <div className="h-56">
                    <img
                      className="w-full h-full object-cover"
                      src={item.hinhAnh}
                      alt="course"
                    />
                  </div>
                  <div className="text-2xl font-bold mt-6">
                    <h3 className="line-clamp-2">{item.tenKhoaHoc}</h3>
                  </div>
                  <div className="flex my-5 text-[#8e88a8] font-semibold">
                    <div>
                      <i className="fa-regular fa-user"></i>
                      <span>{item.soLuongHocVien} Students</span>
                    </div>
                    <span className="mx-6">|</span>
                    <div>
                      <i className="fa-regular fa-clock"></i>
                      <span>{item.ngayTao}</span>
                    </div>
                  </div>
                  <div>
                    <p className="line-clamp-3 text-[#8e88a8] font-light leading-5">
                      {item.moTa}
                    </p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Courses;
