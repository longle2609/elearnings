import { Tabs } from "antd";
import React from "react";
import Description from "./components/Description";
import Curriculum from "./components/Curriculum";
import Instructor from "./components/Instructor";

// eslint-disable-next-line react/prop-types
const Tab = ({ courseDetail }) => {
  return (
    <div>
      <div className="bg-[#000927]">
        <Tabs
          tabPosition="top"
          items={[
            {
              label: (
                <span className="text-white text-[16px] md:text-[20px]">
                  Mô tả
                </span>
              ),
              key: 1,
              children: <Description courseDetail={courseDetail} />,
            },
            {
              label: (
                <span className="text-white text-[16px] md:text-[20px]">
                  Nội dung khoá học
                </span>
              ),
              key: 2,
              children: <Curriculum />,
            },
            {
              label: (
                <span className="text-white text-[16px] md:text-[20px]">
                  Giảng viên
                </span>
              ),
              key: 3,
              children: <Instructor courseDetail={courseDetail} />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Tab;
