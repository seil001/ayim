import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../components/About";
import Contacts from "../pages/Contacts";
import DetPsy from "../pages/DetPsy";
import Forum from "../components/Forum";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MainLayout from "../layouts/MainLayout";
import AddPostPage from "../pages/AdminPage";
import CategoryCreationPage from "../pages/PostPage";
import AdminPage from "../pages/AdminPage";
import PostPage from "../pages/PostPage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/detskaya-psy" element={<DetPsy />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/reg" element={<Register />} />
        <Route path="/log" element={<Login />} />
        <Route path="/post" element={<PostPage />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
