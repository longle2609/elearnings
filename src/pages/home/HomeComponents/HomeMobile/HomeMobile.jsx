import img__ggple from "../../../../assets/homePageImg/homeGgPlay.png";
import img__appStore from "../../../../assets/homePageImg/homeAppStore.png";
import img__mobile from "../../../../assets/homePageImg/homeMobile.png";
import "./homeMobile.scss";
const HomeMobile = () => {
    return (
        <div className="homeMobile__container">
            <div className="homeMobile__item flex items-end justify-between">
                <div className="homeMobile__content  relative top-[-70px] w-[40%]">
                    <h2 className="text-[#e8e2ff] text-3xl font-bold">
                        Online Learning Now In Your Fingertips
                    </h2>
                    <p className="text-[#8e88a8] mt-5 mb-7">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#8217;s standard dummy text ever since the
                        1500s, ...
                    </p>
                    <div className="flex items-center">
                        <img src={img__ggple} alt="ggPlay" />
                        <img
                            src={img__appStore}
                            alt="appStore"
                            className="w-[30%] h-full"
                        />
                    </div>
                </div>
                <div className="homeMobile__img">
                    <img src={img__mobile} alt="mobile" />
                </div>
            </div>
        </div>
    );
};

export default HomeMobile;
