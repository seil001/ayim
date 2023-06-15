import React, { useState } from "react";
import "./Navbar.css";
import ay3 from "../assets/ay3.jpeg";

import { Link } from "react-router-dom";
const adminPages = [{ title: "Category Create", link: "/create-category" }];

const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={ay3} alt="Айым" />
      </div>

      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/home">Главная</Link>
        </li>
        <li>
          <Link to="/about">О нас</Link>
        </li>
        <li>
          <Link to="/forum">Форум</Link>
        </li>
        <li>
          <Link to="/contacts">Контакты</Link>
        </li>

        {/* {user && user.role === "admin" && ( */}
        <li>
          <Link to="/admin">Админ</Link>
        </li>
        {/* )} */}
      </ul>
      <div className="auth-reg">
        <Link to="/reg">Регистрация</Link>
        <Link to="/log">Авторизация</Link>
      </div>

      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "line-1" : ""}`}></div>
        <div className={`line ${isOpen ? "line-2" : ""}`}></div>
        <div className={`line ${isOpen ? "line-3" : ""}`}></div>
      </div>
    </nav>
  );
};
export default Navbar;
