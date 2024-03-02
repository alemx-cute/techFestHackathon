import React from "react";

import Button from "./Button1";

// import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div data-scroll data-scroll-container id="footer">
      <div data-scroll data-scroll-speed=".15" className="footer-top">
        <div className="footer-top-1">
          <div className="fleft">
            <h3>Discover exceptional talent for your team.</h3>
            <Button />
          </div>
          <div className="fright">
            <div className="fright-1">
              <a href="#" className="flinks">Home</a>
              <a href="#" className="flinks">Work</a>
              <a href="#" className="flinks">About</a>
              <a href="#" className="flinks">Contact</a>
            </div>
            <div className="fright-2">
              <a href="#" className="flinks">
                X <i className="ri-arrow-right-up-line"></i>
              </a>
              <a href="#" className="flinks">
                Instagram <i className="ri-arrow-right-up-line"></i>
              </a>
              <a href="#" className="flinks">
                LinkedIn <i className="ri-arrow-right-up-line"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-top-2">
          <h3>
            Kerala-India <br />
            Ernakulam
          </h3>

          <span>
            {" "}
            <h3>biz@rgmail.com</h3>
            <h3>©2024 legal</h3>
          </span>
        </div>
      </div>
      <div  data-scroll data-scroll-container className="footer-btm">
        <h2>
          <span >
            {" "}
            <h2 >L</h2>{" "}
          </span>
          <span>
            {" "}
            <h2 >I</h2>{" "}
          </span>
          <span>
            {" "}
            <h2 >G</h2>{" "}
          </span>
          <span>
            {" "}
            <h2 >H</h2>{" "}
          </span>
          <span>
            {" "}
            <h2 >T</h2>{" "}
          </span>
          <span>
            {" "}
            <h2 >W</h2>{" "}
          </span>
          <span>
            {" "}
            <h2 >E</h2>{" "}
          </span>
          <span>
            {" "}
            <h2 >I</h2>{" "}
          </span>
          <span>
            {" "}
            <h2 >G</h2>{" "}
          </span>
          <span>
            {" "}
            <h2 >H</h2>{" "}
          </span>
          <span>
            {" "}
            <h2 >T</h2>{" "}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default Footer;
