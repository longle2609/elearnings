import "./vision.scss";
import CountUp from "react-countup";
const Vision = () => {
    return (
        <div className="vision__container">
            <span className="vision__bg"></span>
            <div className="vision__content">
                <h4 className="title">Vision</h4>
                <h3 className="sub__title w-1/2 mx-auto italic">
                    Building Strong Foundational Skills For Career Growth
                </h3>
                <hr />
                <p className="mb-2 font-bold text-lg">
                    A LEADING COURSES BRAND IN SOUTHEAST ASIA
                </p>
                <p className="w-1/2 mx-auto text-sm">
                    Become one of the leading tourism brands in Vietnam and the
                    region in the fields of educaion.
                </p>
            </div>
            <div className="vision__achievement flex gap-3">
                <div className="viAchi__contain flex-1">
                    <span>
                        <CountUp
                            end={40}
                            duration={5}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                        +
                    </span>
                    <p>years in business</p>
                </div>
                <div className="viAchi__contain flex-1">
                    <span>
                        <CountUp
                            end={5}
                            duration={4}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </span>
                    <p>service models</p>
                </div>
                <div className="viAchi__contain flex-1">
                    <span>
                        <CountUp
                            end={103}
                            duration={5}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                    </span>
                    <p>member companies</p>
                </div>
                <div className="viAchi__contain flex-1">
                    <span>
                        <CountUp
                            end={200}
                            duration={5}
                            enableScrollSpy={true}
                            scrollSpyOnce={true}
                        />
                        +
                    </span>
                    <p>partners from 30 countries</p>
                </div>
            </div>
        </div>
    );
};

export default Vision;
