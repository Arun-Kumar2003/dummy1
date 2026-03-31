import React from "react";
import  './assets/styles/navbar.css'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="title">
          <h2>CIBIRAJAN</h2>
        </div>

        <div className="content">
          <ul>
            <li>HOME</li>
            <li>PROJECT</li>
            <li>BLOG</li>
            <li>ABOUT</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
