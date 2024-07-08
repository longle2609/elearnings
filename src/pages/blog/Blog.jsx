import "./blog.scss";
const Blog = () => {
    return (
        <section className="blog__container">
            <div className="blog__banner">
                <div className="blogBanner__item">
                    <div className="blogBanner__title">BLOG</div>
                    <hr className="mt-0 mb-4" />
                </div>
            </div>
            <div className="flex justify-around blog__item">
                <div className="w-3/4 ">
                    <div className="text-[#8E88A8]">
                        <span className="text-white">Home </span>{" "}
                        <span className="mx-2">
                            <i className="fa-solid fa-angle-right text-sm"></i>
                        </span>{" "}
                        Blog
                    </div>
                    <div className="item__content grid grid-cols-2 gap-7 mt-8">
                        <div>
                            <div>
                                <img
                                    className="w-full h-full"
                                    src="./public/homeImage/blog1.jpg"
                                    alt="img"
                                />
                            </div>
                            <div className="content__bg">
                                <div className="blog__title">
                                    LMS WordPress Plugin
                                </div>

                                <p className="text line-clamp-2">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry
                                </p>

                                <div className="flex items-center text-[#8e88a8]">
                                    <div>
                                        <i className="fa-solid fa-tag"></i>
                                        <span className="text-white ml-2">
                                            Blog
                                        </span>
                                    </div>
                                    <div className="ml-5">
                                        <i className="fa-solid fa-calendar-days"></i>
                                        <span className="ml-2">20/09/2022</span>
                                    </div>
                                </div>
                                <p className="text-white mt-3">
                                    <span>Read More</span>

                                    <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img
                                    className="w-full h-full"
                                    src="./public/homeImage/blog2.jpg"
                                    alt="img"
                                />
                            </div>
                            <div className="content__bg">
                                <div className="blog__title">
                                    Admin Earns Scholarship
                                </div>

                                <p className="text line-clamp-2">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry
                                </p>

                                <div className="flex items-center text-[#8e88a8]">
                                    <div>
                                        <i className="fa-solid fa-tag"></i>
                                        <span className="text-white ml-2">
                                            Blog
                                        </span>
                                    </div>
                                    <div className="ml-5">
                                        <i className="fa-solid fa-calendar-days"></i>
                                        <span className="ml-2">20/08/2022</span>
                                    </div>
                                </div>
                                <p className="text-white mt-3">
                                    <span>Read More</span>

                                    <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img
                                    className="w-full h-full"
                                    src="./public/homeImage/blog3.jpg"
                                    alt="img"
                                />
                            </div>
                            <div className="content__bg">
                                <div className="blog__title">
                                    Forensic Team Earns Several
                                </div>

                                <p className="text line-clamp-2">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry
                                </p>

                                <div className="flex items-center text-[#8e88a8]">
                                    <div>
                                        <i className="fa-solid fa-tag"></i>
                                        <span className="text-white ml-2">
                                            Blog
                                        </span>
                                    </div>
                                    <div className="ml-5">
                                        <i className="fa-solid fa-calendar-days"></i>
                                        <span className="ml-2">20/08/2022</span>
                                    </div>
                                </div>
                                <p className="text-white mt-3">
                                    <span>Read More</span>

                                    <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img
                                    className="w-full h-full"
                                    src="./public/homeImage/blog4.jpg"
                                    alt="img"
                                />
                            </div>
                            <div className="content__bg">
                                <div className="blog__title">Working</div>

                                <p className="text line-clamp-2">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry
                                </p>

                                <div className="flex items-center text-[#8e88a8]">
                                    <div>
                                        <i className="fa-solid fa-tag"></i>
                                        <span className="text-white ml-2">
                                            Blog
                                        </span>
                                    </div>
                                    <div className="ml-5">
                                        <i className="fa-solid fa-calendar-days"></i>
                                        <span className="ml-2">22/07/2022</span>
                                    </div>
                                </div>
                                <p className="text-white mt-3">
                                    <span>Read More</span>

                                    <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img
                                    className="w-full h-full"
                                    src="./public/homeImage/blog5.jpg"
                                    alt="img"
                                />
                            </div>
                            <div className="content__bg">
                                <div className="blog__title">
                                    Introducing: Dr. Deniz Zeynep
                                </div>

                                <p className="text line-clamp-2">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry
                                </p>

                                <div className="flex items-center text-[#8e88a8]">
                                    <div>
                                        <i className="fa-solid fa-tag"></i>
                                        <span className="text-white ml-2">
                                            Blog
                                        </span>
                                    </div>
                                    <div className="ml-5">
                                        <i className="fa-solid fa-calendar-days"></i>
                                        <span className="ml-2">20/07/2022</span>
                                    </div>
                                </div>
                                <p className="text-white mt-3">
                                    <span>Read More</span>

                                    <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img
                                    className="w-full h-full"
                                    src="./public/homeImage/blog6.jpg"
                                    alt="img"
                                />
                            </div>
                            <div className="content__bg">
                                <div className="blog__title">
                                    Becoming A Better Designer
                                </div>

                                <p className="text line-clamp-2">
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry
                                </p>

                                <div className="flex items-center text-[#8e88a8]">
                                    <div>
                                        <i className="fa-solid fa-tag"></i>
                                        <span className="text-white ml-2">
                                            Blog
                                        </span>
                                    </div>
                                    <div className="ml-5">
                                        <i className="fa-solid fa-calendar-days"></i>
                                        <span className="ml-2">18/06/2022</span>
                                    </div>
                                </div>
                                <p className="text-white mt-3">
                                    <span>Read More</span>

                                    <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="suggest__topic w-1/4 ml-8">
                    <div className="blog__nav">
                        <div className="font-bold text-2xl mb-3">
                            Suggest Topic
                        </div>
                        <div className="leading-7">
                            <div>Blog</div>
                            <div>Design</div>
                            <div>Full Stack</div>
                            <div>Front End</div>
                            <div>Event</div>
                        </div>
                    </div>
                    <div className="blog__nav mt-9">
                        <div className="font-bold text-2xl">Recommend Post</div>
                        <div className="mt-5">
                            <h3 className="font-bold italic">
                                Routing in reactjs
                            </h3>
                            <p className="text-[#b9b4cd] my-3">
                                we will learn how to route in reactjs...
                            </p>
                            <div className="flex items-center ">
                                <i className="fa-regular fa-circle-user"></i>
                                <span className="ml-2">Peter</span>
                            </div>
                        </div>
                        <div className="mt-14">
                            <h3 className="font-bold italic">
                                Object Oriented Programming OOP
                            </h3>
                            <p className="text-[#b9b4cd] my-3">
                                we will learn how to oop in reactjs...
                            </p>
                            <div className="flex items-center ">
                                <i className="fa-regular fa-circle-user"></i>
                                <span className="ml-2">Jack</span>
                            </div>
                        </div>
                        <div className="mt-14">
                            <h3 className="font-bold italic">
                                Asynchronous Processing in Javascript
                            </h3>
                            <p className="text-[#b9b4cd] my-3">
                                you will have tasks that require delay time (API
                                calls, retrieving data from Database,
                                reading/writing files,...). And here...
                            </p>
                            <div className="flex items-center ">
                                <i className="fa-regular fa-circle-user"></i>
                                <span className="ml-2">Sophia</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <img
                            src="./public/homeImage/blogAdvertise.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
