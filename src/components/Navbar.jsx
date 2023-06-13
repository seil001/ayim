import React, { useState } from "react";
import "./Navbar.css";
import ay3 from "../assets/ay3.jpeg";

import { Link } from "react-router-dom";
const Navbar = () => {
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
        {/* <li>
          <Link to="/specialists">Специалисты</Link>
        </li> */}
        <li>
          <Link to="/forum">Форум</Link>
        </li>
        <li>
          <Link to="/contacts">Контакты</Link>
        </li>
      </ul>
      <div className="auth-reg">
        <Link to="/reg">Регистрация</Link>
        <Link to="/sgn-in">Авторизация</Link>
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
