import React from "react";

// Image
import Annika from "../assets/img/Annika_square.jpg";

// React Scroll
import { Element } from "react-scroll";

const Header = (props) => {
  return (
    <>
      <img
        className="profile_image"
        src={Annika}
        title="Picture of me"
        alt="Picture of Annika Engøy"
      />
      <div className="frontend_container">
        <h1 className="top_heading1">Frontend</h1>
        <h2 className="top_heading2">Developer</h2>
      </div>
      <div className="cta_button">Contact me</div>
    </>
  );
};

export default Header;
