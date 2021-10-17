import React from "react";

// Lottie
import LottieAnimation from "../components/Lottie";
import home from "../assets/animation/lottie.json";

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
      <a href="mailto:annikaa@live.no">
        <div className="cta_button">Contact me</div>
      </a>

      <div className="lottie_animation">
        <LottieAnimation lotti={home} height={300} width={300} />
      </div>
    </>
  );
};

export default Header;
