import React from "react";

// Image
import Annika from "../assets/img/Annika_square.jpg";

// React Scroll
import { Element } from "react-scroll";

const Header = (props) => {
  return (
    <>
      <Element name="home"></Element>
      <div className="home-container">
        <img
          className="profile_image"
          src={Annika}
          title="This is me"
          alt="Annika Engøy"
        />
        <div className="frontend_container">
          <h1 className="top_heading1">Frontend</h1>
          <h2 className="top_heading2">Developer</h2>
        </div>{" "}
      </div>
      <div className="cta_button">Contact me</div>
    </>
  );
};

export default Header;
