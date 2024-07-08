import React, { useContext, useState } from "react";
import { Button, IconButton, Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import paths from "../../../paths";
import FormLogin from "../../../components/FormLogin/FormLogin.jsx";
import ButtonIcon from "../../../components/IconButton/ButtonIcon.jsx";
import { AlertMessage } from "../../../App.jsx";

const Login = () => {
  const { handleAlert } = useContext(AlertMessage);
  return (
    <section className="login space-y-5 w-[60%] text-center">
      <h1 className="font-sans text-3xl font-bold tracking-widest">
        Get Started
      </h1>

      <FormLogin handleAlert={handleAlert} />

      <p className="text-end text-xs font-medium">
        <a className="hover:text-orange-500" href="">
          Forgot password ?
        </a>
      </p>

      <p className="text-center">
        or <span className="font-bold ">Continue</span> with
      </p>

      <ButtonIcon />

      <p className="text-center">
        Don't have an account yet ?
        <Link
          to={`${paths.REGISTER}`}
          className="mx-1 font-bold hover: decoration-solid hover:text-orange-500"
        >
          Sign Up
        </Link>
      </p>
    </section>
  );
};

export default Login;
