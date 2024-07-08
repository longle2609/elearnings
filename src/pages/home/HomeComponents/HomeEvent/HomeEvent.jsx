import "./homeEvent.scss";
import { NavLink } from "react-router-dom";
const HomeEvent = () => {
    return (
        <div className="hnews__container flex container mx-auto gap-5">
            <div className="hnews__first flex-1">
                <NavLink>
                    <img
                        className="hnewsImg__first w-full h-full object-cover"
                        src="./public/homeImage/New1.jpg"
                        alt="news"
                    />
                    <div className="hnews__path__new">
                        <h3>News</h3>
                        <hr />
                    </div>
                </NavLink>
            </div>
            <div className="flex-1">
                <img
                    className="w-full"
                    src="./public/homeImage/new2.jpg"
                    alt="news"
                />
                <div>
                    <p className="hnew__content__title">01/04/2024</p>
                    <p className="hnew__item__title">
                        Applying Natural Laws To Technology And Society
                    </p>
                    <p className="text-gray-400 line-clamp-4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>
            <div className="flex-1">
                <img
                    className="w-full"
                    src="./public/homeImage/new3.jpg"
                    alt="news"
                />
                <div>
                    <p className="hnew__content__title">01/04/2024</p>
                    <p className="hnew__item__title">Education Autumn Tour</p>
                    <p className="text-gray-400 line-clamp-4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>
            <div className="flex-1">
                <img
                    className="w-full"
                    src="./public/homeImage/New4.jpg"
                    alt="news"
                />
                <div>
                    <p className="hnew__content__title">01/04/2024</p>
                    <p className="hnew__item__title">Autumn Science Lectures</p>
                    <p className="text-gray-400 line-clamp-4">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry’s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HomeEvent;
