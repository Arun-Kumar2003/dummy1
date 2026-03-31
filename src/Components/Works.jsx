import React from "react";
import "../assets/styles/works.css";
import Work_cards from "./Work_cards";

const Works = () => {
  return (
    <section className="works-container">
      
      <div className="works-tag">🔥 BUILDER MODE</div>

      <h1 className="works-heading">What I've Built</h1>

      <p className="works-subtext">
        Real products. Real users. Real impact.
      </p>

      <div className="works-filters">
        <button className="works-btn works-btn-active">All</button>
        <button className="works-btn">Flutter</button>
        <button className="works-btn">Supabase</button>
        <button className="works-btn">Python</button>
        <button className="works-btn">Stripe</button>
      </div>

      <Work_cards/>
    </section>
  );
};

export default Works;