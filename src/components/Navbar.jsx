import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLSq5vTjN-zFvPMjNfP7piwSBytSIV8K5M_065rX66&s"
          alt="Айым"
        />
      </div>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#">Главная</a>
        </li>
        <li>
          <a href="#">О нас</a>
        </li>
        <li>
          <a href="#">Услуги</a>
        </li>
        <li>
          <a href="#">Контакты</a>
        </li>
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className={`line ${isOpen ? "line-1" : ""}`}></div>
        <div className={`line ${isOpen ? "line-2" : ""}`}></div>
        <div className={`line ${isOpen ? "line-3" : ""}`}></div>
      </div>
    </nav>
  );
};

export default Navbar;
