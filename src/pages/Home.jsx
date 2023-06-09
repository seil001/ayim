import React from "react";
import styles from "./Home.modul.css";
import kgz from "../assets/kgz.mp4";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="overlay"></div>
      <video src={kgz} autoPlay loop muted className="cover-video" />
      <div className="content">
        <h1 className="ayim">АЙЫМ</h1>
      </div>
    </div>
  );
};

export default Home;
