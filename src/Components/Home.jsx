import React from "react";
import "../assets/styles/home.css";
import center from "../assets/images/center.webp";
import right from "../assets/images/right.webp";
import left from "../assets/images/left.webp";

const Home = () => {
  return (
    <>
      <div className="home">
        <h1>SCALE TO HIGH</h1>
        <button className="works"> WORKS</button>
        <div className="images">
          <img src={left} alt="Citra gōcarisuvudilla" />
          <img src={center} alt="chhavi dikhaee nahin de rahee hai" />
          <img src={right} alt="chithram drishyamalla" />
        </div>
      </div>
    </>
  );
};

export default Home;
