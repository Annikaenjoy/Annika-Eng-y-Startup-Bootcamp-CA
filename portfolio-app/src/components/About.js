import React from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// React Scroll
import { Element } from "react-scroll";

const AboutMe = (props) => {
  return (
    <>
      <div>
        <Element name="about"></Element>
        <Container className="about_container">
          <Row>
            <Col md={6}>
              <div className="heading_container">
                <h1 className="about_h1">About</h1>
                <h2 className="about_h2">me</h2>
              </div>
              <h3 className="description_text">
                Hi! I'm Annika. I work as a frontend developer in Mosjøen,
                Norway. I love combining code with good UX/UI and great design.
              </h3>
            </Col>
            <Col md={6}>
              <div className="box1">
                <p>
                  My interest in coding started back in 2010 creating blog
                  themes with HTML, CSS and JavaScript, but it wasn't until 2019
                  I decided to turn my hobby into a career. In March 2020 I
                  started studying Frontend Development at Noroff School of
                  Technology and Digital Media, and I could not be happier.{" "}
                  <br /> <br />
                  Today I have the priviledge of working as a Frontend Developer
                  in a startup company, being there every step of the way
                  building our own products and helping various clients build
                  their digital brand and identity. Here you can check out some
                  of the websites I've created.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default AboutMe;
