import { Col, Row } from "antd";
import React from "react";
import { Outlet } from "react-router-dom";
import Lottie from "react-lottie";
import courseAnimation from "./../../assets/lotties/auth.json";
import "./authLayout.scss";

const AuthLayout = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: courseAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-screen w-full bg-gray-50 flex justify-center items-center">
      <div className="container flex justify-center items-center">
        <Row className="shadow-2xl auth-row shadow-orange-500/30 w-[80%] h-[70vh] rounded-2xl">
          <Col
            span={12}
            className="animation flex justify-center items-center bg-orange-300 rounded-l-2xl h-full"
          >
            {/* Animation */}
            <div className="animate rounded-2xl">
              <Lottie
                options={defaultOptions}
                height={"500px"}
                width={"500px"}
              />
            </div>
          </Col>
          <Col span={12} className="auth bg-white h-full rounded-r-2xl ">
            <main className="w-full h-[70vh] flex justify-center flex-col items-center">
              {/* ---Authentication Layout --- */}
              <Outlet />
              {/* --- --- */}
            </main>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AuthLayout;
