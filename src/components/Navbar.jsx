import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const { getTotalAmount } = useContext(StoreContext);

  return (
    <div className="navbar flex px-10 items-center justify-between pt-5">
      <div className="logo">
        <img className="logo_img w-[180px]" src={assets.feastfleet_logo} alt="logo" />
      </div>

      <ul className="menu_items flex gap-6 items-center cursor-pointer">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore_menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app_download"
          onClick={() => setMenu("mobile app")}
          className={menu === "mobile app" ? "active" : ""}
        >
          Mobile app
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="nav_right flex gap-6 items-center">
        <div className="search_icon_div">
          <img
            src={assets.search_icon}
            className="search_icon cursor-pointer hover:scale-105"
          />
        </div>
        <div className="basket_icon_div">
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              className="basket_icon cursor-pointer hover:scale-105"
            />
          </Link>
          <div className={getTotalAmount() === 0 ? "" : "dot"}></div>
        </div>

        <button
          onClick={() => setShowLogin(true)}
          className="login_btn py-1 px-4  text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition duration-200 ease-in-out"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
