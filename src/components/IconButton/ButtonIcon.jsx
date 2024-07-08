import React from "react";
import { IconButton } from "@material-tailwind/react";

const ButtonIcon = () => {
  return (
    <div className="flex justify-center gap-4">
      <IconButton className="text-xl bg-white text-red-500 border border-solid hover:bg-red-500 hover:text-white">
        <i className="fa-brands fa-google"></i>
      </IconButton>
      <IconButton className="text-xl bg-black text-white border border-solid hover:bg-white hover:text-black">
        <i className="fa-brands fa-github"></i>
      </IconButton>
      <IconButton className="text-xl bg-blue-500 text-white border border-solid hover:bg-white hover:text-blue-500">
        <i className="fa-brands fa-twitter"></i>
      </IconButton>
    </div>
  );
};

export default ButtonIcon;
