import React, { useState } from "react";
import { MenuData } from "./MenuData";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="NavbarItems">
        <h1 className="logo">
          Ayim <i class="fa-brands fa-slack"></i>
        </h1>
        <div className="menu-icons">
          <i className="fa-solid fa-bars"></i>
        </div>

        <ul className="nav-menu">
          {MenuData.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cName}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
