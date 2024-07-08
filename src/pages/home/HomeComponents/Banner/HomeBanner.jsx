import "./homeBanner.scss";

const HomeBanner = () => {
    return (
        <div className="banner__container">
            <div className="banner__bg"></div>
            <div className="banner__content">
                <p className="text-2xl text-gray-300 mb-3">
                    Professional & Lifelong Learning
                </p>
                <h1>
                    <span className="text-[#31D7A9]"> Online Courses</span>
                    <br />
                    <span>With Certificates & Diplomas </span>
                </h1>
                <form className="banner__form">
                    <input
                        type="text"
                        placeholder="What do you want to learn?"
                    />
                    <button type="button" className="banner__btn">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HomeBanner;
