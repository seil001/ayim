import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <video
          src="https://www.youtube.com/watch?v=73UCO3atSpc&pp=ygUu0LrRi9GA0LPRi9C30YHRgtCw0L0g0YLQvtC-0LvQvtGA0YMg0LLQuNC00LXQvg%3D%3D"
          controls
        />
      </div>
      <style jsx>{`
        .home {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh; /* Adjust this to the desired height */
        }

        video {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
        }
      `}</style>
    </>
  );
};

export default Home;
