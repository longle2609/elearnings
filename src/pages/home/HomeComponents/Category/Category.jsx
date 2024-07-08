import { useEffect, useState } from "react";
import "./category.scss";
import { coursesApi } from "../../../../api/courses.api";
const Category = () => {
    const cateIcon = [
        `fa-solid fa-laptop-code`,
        `fa-solid fa-pen-nib`,
        `fa-solid fa-mobile-screen-button`,
        `fa-brands fa-square-font-awesome`,
        `fa-brands fa-stack-overflow`,
        `fa-brands fa-think-peaks`,
    ];
    const [dataCate, setDataCate] = useState([]);
    // console.log(dataCate);
    useEffect(() => {
        coursesApi
            .getCategoryCourse()
            .then((res) => {
                // console.log(res.data);
                let newArr = [];
                // Thêm thuộc tính Icon cho API CategoryCourse
                res.data.map((item, index) => {
                    newArr.push({ ...item, icon: cateIcon[index] });
                });
                setDataCate(newArr);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="category__container">
            <div className="cate__title text-[#E8E2FF] text-3xl text-center font-bold">
                Top Most Interesting Courses
            </div>
            <div className="cate__item grid grid-cols-6 gap-6 text-white mt-12">
                {dataCate.map((item, index) => {
                    return (
                        <div className="item__container" key={index}>
                            <div className="text-3xl">
                                <i className={item.icon}></i>
                            </div>
                            <div className="text-2xl font-bold text-[#e8e2ff] my-3 hover:text-[#FF7700] transition duration-200">
                                {item.maDanhMuc}
                            </div>
                            <div className="text-[#8e88a8] text-sm">
                                {item.tenDanhMuc}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Category;
