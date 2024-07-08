/* eslint-disable react/prop-types */
import React from "react";

function Description({ courseDetail }) {
  const { moTa = "" } = courseDetail || {};
  return (
    <div>
      <div className="text-[#8E88A8] bg-[#0F1C43] p-5 mt-5">
        <div className="text-[22px] text-white mb-7">
          <p>Những gì bạn sẽ học</p>
        </div>
        <div>
          <div className="flex items-center gap-3 leading-7 font-light text-[17.6px] mb-3">
            <i className="fa-solid fa-check text-[#FF7700] text-[20px]"></i>
            <p>
              Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với
              người dùng và phản ứng nhanh
            </p>
          </div>
          <div className="flex items-center gap-3 leading-7 font-light text-[17.6px] mb-3">
            <i className="fa-solid fa-check text-[#FF7700] text-[20px]"></i>
            <p>
              Đăng ký công việc được trả lương cao hoặc làm freelancer trong một
              trong những lĩnh vực được yêu cầu nhiều nhất mà bạn có thể tìm
              thấy trong web dev ngay bây giờ
            </p>
          </div>
          <div className="flex items-center gap-3 leading-7 font-light text-[17.6px] mb-3">
            <i className="fa-solid fa-check text-[#FF7700] text-[20px]"></i>
            <p>
            Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng sức mạnh của JavaScript một cách dễ dàng
            </p>
          </div>
          <div className="flex items-center gap-3 leading-7 font-light text-[17.6px] mb-3">
            <i className="fa-solid fa-check text-[#FF7700] text-[20px]"></i>
            <p>
            Tìm hiểu tất cả về React Hooks và React Components
            </p>
          </div>
          <div className="flex items-center gap-3 leading-7 font-light text-[17.6px] mb-3">
            <i className="fa-solid fa-check text-[#FF7700] text-[20px]"></i>
            <p>
            Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp Javascript NPM, Webpack, Babel và ES6 / ES2015
            </p>
          </div>
          <div className="flex items-center gap-3 leading-7 font-light text-[17.6px] mb-3">
            <i className="fa-solid fa-check text-[#FF7700] text-[20px]"></i>
            <p>
            Nhận ra sức mạnh của việc xây dựng các thành phần có thể kết hợp
            </p>
          </div>
          <div className="flex items-center gap-3 leading-7 font-light text-[17.6px] mb-3">
            <i className="fa-solid fa-check text-[#FF7700] text-[20px]"></i>
            <p>
            Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản
            </p>
          </div>
          <div className="flex items-center gap-3 leading-7 font-light text-[17.6px] mb-3">
            <i className="fa-solid fa-check text-[#FF7700] text-[20px]"></i>
            <p>
            Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các ứng dụng Redux
            </p>
          </div>
        </div>
      </div>
      <div className="text-[#8E88A8] text-[16px] mt-7">
        <p>
          {/* React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử dụng và
          tìm hiểu ngày nay để xây dựng giao diện người dùng hiện đại, phản ứng
          cho web.Khóa học này dạy bạn về React chuyên sâu, từ cơ bản, từng bước
          đi sâu vào tất cả các kiến ​​thức cơ bản cốt lõi, khám phá rất nhiều
          ví dụ và cũng giới thiệu cho bạn các khái niệm nâng cao.Bạn sẽ nhận
          được tất cả lý thuyết, hàng tấn ví dụ và bản trình diễn, bài tập và
          bài tập cũng như vô số kiến ​​thức quan trọng bị hầu hết các nguồn
          khác bỏ qua - sau cùng, có một lý do tại sao khóa học này lại rất lớn!
          Và trong trường hợp bạn thậm chí không biết tại sao bạn lại muốn học
          React và bạn chỉ ở đây vì một số quảng cáo hoặc "thuật toán" - đừng lo
          lắng: ReactJS là một công nghệ quan trọng với tư cách là một nhà phát
          triển web và trong khóa học này, tôi sẽ cũng giải thích TẠI SAO điều
          đó lại quan trọng! */}
          {moTa}
        </p>
      </div>
    </div>
  );
}

export default Description;
