import React, { useEffect } from "react";
import { getCoursesApi } from "../../api/courses.api";
import HomeBanner from "./HomeComponents/Banner/HomeBanner";
import Category from "./HomeComponents/Category/Category";
import "./home.scss";
import Courses from "./HomeComponents/Courses/Courses";
import Vision from "./HomeComponents/Vision/Vision";
import HomeEvent from "./HomeComponents/HomeEvent/HomeEvent";
import HomeMobile from "./HomeComponents/HomeMobile/HomeMobile";
const Home = () => {
    // useEffect(() => {
    //     getCoursesApi()
    //         .then((res) => console.log("courses data: ", res))
    //         .catch((err) => console.log("error: ", err));
    // }, []);

    return (
        <section className="home">
            <HomeBanner />
            <Category />
            <Courses />
            <Vision />
            <HomeEvent />
            <HomeMobile />
        </section>
    );
};

export default Home;
