import { Button, Input } from "@material-tailwind/react";
import React, { useContext } from "react";
import paths from "../../../paths";
import { Link } from "react-router-dom";
import FormRegister from "../../../components/FormRegister/FormRegister";
import { AlertMessage } from "../../../App";
import ButtonIcon from "../../../components/IconButton/ButtonIcon";

const Register = () => {
  const { handleAlert } = useContext(AlertMessage);
  return (
    <section className="register flex flex-col space-y-5">
      <h1 className="font-sans text-3xl font-bold tracking-widest text-center ">
        Create Account
      </h1>

      <FormRegister handleAlert={handleAlert} />

      <p className="text-center">
        or <span className="font-bold ">Continue</span> with
      </p>

      <ButtonIcon />

      <p className="text-center">
        Already have an account ?
        <Link
          to={`${paths.LOGIN}`}
          className="mx-1 font-bold hover: decoration-solid hover:text-orange-500"
        >
          Sign In
        </Link>
      </p>
    </section>
  );
};

export default Register;
