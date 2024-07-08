import "./header.scss";
import logo from "../../assets/homePageImg/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import DropDown from "../DropDownMenu/DropDown";
import paths from "../../paths";

const Header = () => {
  // Scroll down Header sẽ đổi từ màu transparent thành màu xanh
  const [navbar, setNavBar] = useState(false);
  const changeBackGround = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBackGround);

  // Check Trang hiển thị đang ở trang nào trên navbar => Nếu đang ở trang nào chữ đó sẽ màu vàng
  const checkActive = ({ isActive }) => {
    // console.log(isActive);
    let className = "font-semibold pb-5";
    return `${className} ${isActive ? "text-yellow-300" : "text-white"}`;
  };

  /** Mở thanh menu khi ở chế độ tablet và mobile
   * - true: đang mở
   * - false: không mở
   * */
  let [open, setOpen] = useState(false);

  /**Mở login và register ở chế độ máy nhỏ */
  let [openLR, setOpenLR] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <header className={navbar ? "header header__active" : "header"}>
      <div className="header__container">
        <nav className="border-gray-200 px-4 lg:px-6 py-2.5 ">
          <span
            className="check__btn"
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-solid fa-bars"></i>
            )}
          </span>
          <span
            className="check__logRes"
            onClick={() => {
              setOpenLR(!openLR);
            }}
          >
            {openLR ? (
              <i className="fa-solid fa-xmark"></i>
            ) : (
              <i className="fa-regular fa-circle-user"></i>
            )}
          </span>
          <div className="header__logo flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <NavLink className="flex items-center w-8">
              <img
                src={logo}
                className="mr-3 sm:h-9 w-full h-full"
                alt="Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                E-Learning
              </span>
            </NavLink>{" "}
            <div
              className={`${
                openLR ? "header__log__res open__logRes" : "header__log__res "
              } flex items-center lg:order-2`}
            >
              <NavLink
                to={paths.LOGIN}
                className="headerlg__item flex items-center"
              >
                <i className="fa-solid fa-circle-user text-3xl text-gray-300 mr-3"></i>
                {/* <i className="fa-regular fa-circle-user text-3xl text-gray-300 mr-3"></i> */}
                Log in
              </NavLink>
              <span className="text-gray-300 text-2xl mx-5">I</span>

              <NavLink
                to={paths.REGISTER}
                className="headerlg__item flex items-center"
              >
                <i className="fa-regular fa-circle-user text-3xl text-gray-300 mr-3"></i>
                Register
              </NavLink>
            </div>
            <div
              className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul
                className={`flex space-x-8 font-medium flex-row  ${
                  open ? "header__menu open__menu" : "header__menu"
                }`}
              >
                <li>
                  <NavLink to="/" className={checkActive} aria-current="page">
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={`${paths.COURSES}/`}
                    className={checkActive}
                    onMouseEnter={() => handleMouseEnter()}
                    onMouseLeave={() => handleMouseLeave()}
                  >
                    COURSES
                  </NavLink>
                  {isHovered && (
                    <div
                      onMouseEnter={() => handleMouseEnter()}
                      onMouseLeave={() => handleMouseLeave()}
                    >
                      <DropDown />
                    </div>
                  )}
                </li>
                <li>
                  <NavLink to={paths.BLOG} className={checkActive}>
                    BLOG
                  </NavLink>
                </li>
                <li>
                  <NavLink to={paths.EVENT} className={checkActive}>
                    EVENT
                  </NavLink>
                </li>
                <li>
                  <NavLink to={paths.CONTACT} className={checkActive}>
                    CONTACT
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
