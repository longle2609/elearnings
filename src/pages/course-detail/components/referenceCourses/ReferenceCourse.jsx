import React, { useCallback, useEffect, useState } from "react";
import Content from "./components/Content";
import { getCourseListWithCodeApi } from "../../../../api/courses.api";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ReferenceCourse = ({ maDanhMuc }) => {
  const [referenceCourses, setReferenceCourses] = useState([]);
  const navigate = useNavigate();

  console.log(referenceCourses);

  const getReferenceCourses = useCallback(async () => {
    if (!maDanhMuc) {
      return;
    }
    const res = await getCourseListWithCodeApi(maDanhMuc);
    setReferenceCourses(res);
  }, [maDanhMuc]);

  const handleOnclick = useCallback(
    (maKhoaHoc) => {
      navigate(`/courses/detail/${maKhoaHoc}`);
    },
    [navigate]
  );

  useEffect(() => {
    getReferenceCourses();
  }, [getReferenceCourses]);
  return (
    <div className="text-[#E8E2FF]">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <p className="text-[32px] font-semibold">Khóa học tham khảo</p>
        </div>
        <div className="my-7">
          <span className="inline-block text-[16px] border-2 border-solid border-[#E8E2FF] px-7 py-3 cursor-pointer hover:bg-[#FF7700] hover:border-[#FF7700]" onClick={() => {
            navigate('/courses')
          }}>
            Tất Cả Khoá Học
          </span>
        </div>
      </div>
      {/* content  */}
      <div className="md:flex flex-wrap">
        {referenceCourses.slice(0, 4).map((course) => {
          return (
            <div
              key={course.maKhoaHoc}
              className="md:px-4 md:basis-1/2 lg:basis-1/4"
              onClick={() => {
                const { maKhoaHoc = "" } = course;
                if (maKhoaHoc) {
                  handleOnclick(maKhoaHoc);
                }
              }}
            >
              <Content course={course} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReferenceCourse;
