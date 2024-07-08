import paths from "../../paths";
import "./dropdown.scss";
import { NavLink } from "react-router-dom";
const DropDown = () => {
    return (
        <div>
            <ul className="flex flex-col gap-4 dropDown__profile">
                <NavLink to={`${paths.COURSES}/BackEnd`}>BackEnd</NavLink>
                <NavLink to={`${paths.COURSES}/Design`}>Design</NavLink>
                <NavLink to={`${paths.COURSES}/DiDong`}>Di Dong</NavLink>
                <NavLink to={`${paths.COURSES}/FrontEnd`}>Front End</NavLink>
                <NavLink to={`${paths.COURSES}/FullStack`}>Full Stack</NavLink>
                <NavLink to={`${paths.COURSES}/TuDuy`}>Tu Duy</NavLink>
            </ul>
        </div>
    );
};

export default DropDown;
