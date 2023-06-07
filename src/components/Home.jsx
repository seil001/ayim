import React from "react";
import "./Home.css";
import kgz from "../assets/kgz.mp4";

const Home = () => {
  return (
    <div className="home">
      <div className="overlay"></div>
      <video src={kgz} autoPlay loop muted />
      <div className="content">
        <h1>АЙЫМ</h1>
      </div>
    </div>
  );
};

export default Home;
