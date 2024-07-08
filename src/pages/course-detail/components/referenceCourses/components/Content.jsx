/* eslint-disable react/prop-types */
import React from "react";
import BannerContent from "../../../../../../public/image/banner2.jpg";
import AvtContent from "../../../../../../public/image/avatar2.png";

const Content = ({ course }) => {
  const {
    tenKhoaHoc = "",
    moTa = "",
    nguoiTao = {},
    hinhAnh = "",
  } = course || {};

  return (
    <div>
      <div className="mb-10 cursor-pointer">
        <div className="relative">
          <div
            style={{ height: 200 }}
            className="border-2 border-solid border-[#1f3064]"
          >
            <img
              src={hinhAnh ? hinhAnh : BannerContent}
              alt="none"
              className="w-full h-full object-contain"
            />
          </div>
          <span className="inline-block border-solid bg-[#FF7700] px-4 py-1 font-black absolute top-3 left-3">
            YÊU THÍCH
          </span>
        </div>
        <p className="text-[25px] font-bold text-[#E8E2FF] hover:text-[#FF7700] cursor-pointer my-5">
          {tenKhoaHoc}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <i className="fa-regular fa-clock text-[#FF7700]"></i>
            <p>8 giờ</p>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-light fa-calendar-days text-[#FF7700]"></i>
            <p>4 tuần</p>
          </div>
          <div className="flex items-center gap-2">
            <i className="fas fa-signal iconLevel text-[#FF7700]"></i>
            <p>Tất cả</p>
          </div>
        </div>
        <p className="text-[18px] text-[#8E88A8] mt-5 mb-10 eclipse-text">
          {moTa}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-[40px] h-[40px]">
              <img src={AvtContent} alt="" />
            </div>
            <p>{nguoiTao?.taiKhoan}</p>
          </div>
          <div>
            <p className="text-[12px] text-[#8E88A8] line-through">
              800.000 <sup>đ</sup>
            </p>
            <p>
              400.000 <sup>đ</sup>
              <i className="fa-solid fa-tag text-[#FF7700] text-[22px] ms-1"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
