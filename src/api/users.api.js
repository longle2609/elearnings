import { GROUP_CODE } from "../constants";
import fetcher from "./fetcher";

/**
 * @description 
 * get all users data
 * @method
 * GET
 * @returns
 * []: users' objects
 */
export const getUsersApi = async () => {
    try {
        const response = await fetcher.get(
            `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_CODE}`
        );
        return response.data;
    } catch (exception) {
        throw new Error(exception);
    }
};

/**
 * @description 
 * user login
 * @method
 * POST
 * @returns
 * {}: user data object
 */
export const loginApi = async (data) => {
    try {
        await fetcher.post(
            `/QuanLyNguoiDung/DangNhap`, data
        );
        return response.data;
    } catch (exception) {
        throw new Error(exception);
    }
};

/**
 * @description 
 * user register
 * @method
 * POST
 * @returns
 * {}: user data object
 */
export const registerApi = async (data) => {
    try {
        await fetcher.post(
            `/QuanLyNguoiDung/DangKy`, data
        );
        return response.data;
    } catch (exception) {
        throw new Error(exception);
    }
};