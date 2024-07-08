import axios from "axios";
import { GROUP_CODE } from "../constants";
import fetcher from "./fetcher";

/**
 * @description
 * get all course data
 * @method
 * GET
 * @returns
 * []: courses' objects
 */
export const getCoursesApi = async () => {
  try {
    const response = await fetcher.get(
      `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_CODE}`
    );
    // console.log("response: ", response)
    console.log("response: ", response);
    return response.data;
  } catch (exception) {
    throw new Error(exception);
  }
};

export const deleteCoursesAPI = async (maKH) => {
  try {
    const response = await fetcher.delete(
      `/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKH}`
    );
  } catch (exception) {
    throw new Error(exception);
  }
};

export const getCourseDetailApi = async (id) => {
  try {
    const response = await fetcher.get(
      `/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`
    );
    return response.data;
  } catch (exception) {
    throw new Error(exception);
  }
};

// export const addCourseAPI = async (data) => {
//   try {
//     const response = await fetcher.post(`/QuanLyKhoaHoc/ThemKhoaHoc`, data);
//     return response;
//   } catch (exception) {
//     throw new Error(exception);
//     alert(exception.response.data);
//     // return exception;
//   }
// };

export const addCourseAPI = {
  addCourseAPI: (data) => {
    return fetcher.post(`/QuanLyKhoaHoc/ThemKhoaHoc`, data);
  },
  updateCourseAPI: (data) => {
    return fetcher.put(`/QuanLyKhoaHoc/CapNhatKhoaHoc`, data);
  },
};

export const getCourseListWithCodeApi = async (maDanhMuc) => {
  try {
    const response = await fetcher.get(
      `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maKhoaHoc=${maDanhMuc}&MaNhom=${GROUP_CODE}`
    );
    return response.data;
  } catch (exception) {
    throw new Error(exception);
  }
};

export const getCourseListApi = async (page = 1) => {
  try {
    const response = await fetcher.get(
      `/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?MaNhom=${GROUP_CODE}&pageSize=12&page=${page}`
    );
    return response.data;
  } catch (exception) {
    throw new Error(exception);
  }
};

export const checkImage = async () => {
  try {
    const response = await axios.get(
      "https://elearningnew.cybersoft.edu.vn/hinhanh/lap-trinh-python.jpg",
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );
    return response;
  } catch (exception) {
    throw new Error(exception);
  }
};

export const coursesApi = {
  getCategoryCourse: () => {
    return fetcher.get("/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
  },
  getCoursesApi2: () => {
    return fetcher.get(
      `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_CODE}`
    );
  },
  getCoursesByCategory: (cate) => {
    return fetcher.get(
      `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${cate}&MaNhom=${GROUP_CODE}`
    );
  },
};
