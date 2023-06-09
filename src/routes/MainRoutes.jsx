import React from "react";
import { Routes, Route } from "react-router-dom";

// import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Reg from "../pages/Reg";
import About from "../pages/About";
// import Specialists from "../pages/Specialists";
import ForumUser from "../pages/ForumUser";
import Contacts from "../pages/Contacts";
import DetPsy from "../pages/DetPsy";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        {/* <Route element={<MainLayout />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/specialists" element={<Specialists />} /> */}
        <Route path="/forum" element={<ForumUser />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/detskaya-psy" element={<DetPsy />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
