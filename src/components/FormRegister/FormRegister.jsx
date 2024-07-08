import { Button, Input } from "@material-tailwind/react";
import React from "react";
import { useFormik } from "formik";
import Warning from "../Warning/Warning";
import * as Yup from "yup";
import { quanLiNguoiDung } from "../../api/auth";
import { useNavigate } from "react-router-dom";
import paths from "../../paths";
import "./formRegister.scss";

const FormRegister = ({ handleAlert }) => {
  const navigate = useNavigate();
  const { values, touched, errors, handleBlur, handleSubmit, handleChange } =
    useFormik({
      initialValues: {
        maNhom: "GP01",
        hoTen: "",
        taiKhoan: "",
        email: "",
        matKhau: "",
        soDT: "",
        confirm: "",
      },
      onSubmit: (values) => {
        const { confirm, ...data } = values;
        console.log(data);
        quanLiNguoiDung
          .register(data)
          .then((res) => {
            console.log(res);
            navigate(paths.LOGIN);
            handleAlert("success", "Đăng kí thành công");
          })
          .catch((err) => {
            handleAlert("error", "Đăng Nhập Thất Bại");
            console.log(err);
          });
      },
      validationSchema: Yup.object({
        hoTen: Yup.string().required("Vui lòng không để trống"),
        taiKhoan: Yup.string().required("Vui lòng không để trống"),
        email: Yup.string()
          .required("Vui lòng không để trống")
          .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Email không đúng định dạng"
          ),
        matKhau: Yup.string()
          .required("Vui lòng không để trống")
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{8,}$/,
            "Vui lòng nhập đúng mật khẩu"
          ),
        soDT: Yup.string().required("Vui lòng không để trống"),
        confirm: Yup.string()
          .oneOf([Yup.ref("matKhau"), null], "Mật khẩu không khớp")
          .required("Vui lòng không để trống"),
      }),
    });
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="grid grid-cols-2 gap-4"
      >
        <div className="input w-22">
          <Input
            name="hoTen"
            value={values.hoTen}
            onBlur={handleBlur}
            onChange={handleChange}
            label="Fullname"
          />
          <Warning touched={touched.hoTen} errors={errors.hoTen} />
        </div>
        <div className="input w-22">
          <Input
            name="taiKhoan"
            value={values.taiKhoan}
            onBlur={handleBlur}
            onChange={handleChange}
            label="Username"
          />

          <Warning touched={touched.taiKhoan} errors={errors.taiKhoan} />
        </div>
        <div className="input w-full col-span-2">
          <Input
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            label="Email"
          />
          <Warning touched={touched.email} errors={errors.email} />
        </div>
        <div className="input w-full col-span-2">
          <Input
            name="soDT"
            value={values.soDT}
            onBlur={handleBlur}
            onChange={handleChange}
            label="Phone"
          />
          <Warning touched={touched.soDT} errors={errors.soDT} />
        </div>
        <div className="input w-22">
          <Input
            name="matKhau"
            value={values.matKhau}
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            label="Password"
          />
          <Warning touched={touched.matKhau} errors={errors.matKhau} />
        </div>
        <div className="input w-22">
          <Input
            name="confirm"
            value={values.confirm}
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            label="Confirm Password"
          />
          <Warning touched={touched.confirm} errors={errors.confirm} />
        </div>

        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-400 col-span-2"
        >
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default FormRegister;
