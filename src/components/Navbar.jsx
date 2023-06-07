import React, { useState } from "react";
import "./Navbar.css";
import ay3 from "../assets/ay3.jpeg";
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
          <a href="#">Главная</a>
        </li>
        <li>
          <a href="#">О нас</a>
        </li>
        <li>
          <a href="#">Специалисты</a>
        </li>
        <li>
          <a href="#">Форум</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
        <li>
          <a href="#"></a>
        </li>
      </ul>
      <button className="sign-up">Регистрация</button>
      <button className="login">Авторизация</button>
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "line-1" : ""}`}></div>
        <div className={`line ${isOpen ? "line-2" : ""}`}></div>
        <div className={`line ${isOpen ? "line-3" : ""}`}></div>
      </div>
    </nav>
  );
};
export default Navbar;
