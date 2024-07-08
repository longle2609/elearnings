import fetcher from "./fetcher.js";

export const quanLiNguoiDung = {
  login: (data) => {
    return fetcher.post("/QuanLyNguoiDung/DangNhap", data);
  },
  register: (data) => {
    return fetcher.post("/QuanLyNguoiDung/DangKy", data);
  },
};
