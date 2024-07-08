import React from "react";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Warning from "../Warning/Warning";
import { quanLiNguoiDung } from "../../api/auth";

const FormLogin = ({ handleAlert }) => {
  const [icon, setIcon] = useState("fa-solid fa-eye-slash");
  const [type, setType] = useState("password");

  const handleIcon = (className) => {
    if (className == "fa-solid fa-eye-slash") {
      setIcon("fa-solid fa-eye");
      setType("text");
    } else {
      setIcon("fa-solid fa-eye-slash");
      setType("password");
    }
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
      },
      onSubmit: (values) => {
        console.log(values);
        quanLiNguoiDung
          .login(values)
          .then((res) => {
            console.log(res);
            handleAlert("success", "Đăng nhập thành công");
          })
          .catch((err) => {
            console.log(err);
            handleAlert("error", err.response.data[""]);
          });
      },
      validationSchema: Yup.object({
        taiKhoan: Yup.string().required("Vui lòng không bỏ trống"),
        matKhau: Yup.string()
          .required("Vui lòng không bỏ trống")
          .matches(
            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{8,}$/,
            "Vui lòng nhập đúng mật khẩu"
          ),
      }),
    });

  console.log(touched);
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col space-y-5"
      >
        <div className="w-full">
          <Input
            color={
              touched.taiKhoan == true && errors.taiKhoan ? "red" : "orange"
            }
            name="taiKhoan"
            value={values.taiKhoan}
            onBlur={handleBlur}
            onChange={handleChange}
            label="Username"
            autoComplete="taiKhoan"
          />
          <Warning touched={touched.taiKhoan} errors={errors.taiKhoan} />
        </div>

        <div className="w-full">
          <Input
            color={touched.matKhau == true && errors.matKhau ? "red" : "orange"}
            type={type}
            name="matKhau"
            value={values.matKhau}
            onBlur={handleBlur}
            onChange={handleChange}
            label="Password"
            autoComplete="current-password "
            icon={
              <i
                onClick={(event) => {
                  handleIcon(event.target.className);
                }}
                className={icon}
              ></i>
            }
          />
          <Warning touched={touched.matKhau} errors={errors.matKhau} />
        </div>

        <Button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-400"
        >
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default FormLogin;
