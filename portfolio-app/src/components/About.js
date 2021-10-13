import React from "react";

// React Scroll
import { Element } from "react-scroll";

const AboutMe = (props) => {
  return (
    <>
      <Element name="about"></Element>
      <div className="heading_container">
        <h1>About</h1>
        <h2>me</h2>
      </div>
      <h3 className="description_text">
        Hi! I'm Annika. I work as a frontend developer in Mosjøen, Norway. I
        love combining code with good UX/UI and great design.
      </h3>
      <div className="box1">
        <p>
          My interest in coding started back in 2010 creating blog themes with
          HTML, CSS and JavaScript, but it wasn't until 2019 I decided to turn
          my hobby into a career. In March 2020 I started studying Frontend
          Development at Noroff School of Technology and Digital Media, and I
          could not be happier. <br /> <br />
          Today I have the priviledge of working as a Frontend Developer in a
          startup company, being there every step of the way building our own
          products and helping various clients build their digital brand and
          identity.
          <br />
          <br />
          <a className="box1_link" href="#">
            Click for more!
          </a>
        </p>
      </div>
      <div className="box2">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
          molestie consequat,  Lorem ipsum dolor sit amet, cons ectetuer
          adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
          dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
          nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
          ea commodo consequat.
          <br /> <br />
          <a className="box2_link" href="#">
            Click to hide!
          </a>
        </p>
      </div>
    </>
  );
};

export default AboutMe;
