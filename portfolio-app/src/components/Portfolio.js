import React from "react";

// React Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// React Scroll
import { Element } from "react-scroll";

// Images
import CSM from "../assets/img/CSM.jpg";
import SpaceX from "../assets/img/spacex.jpg";
import MH from "../assets/img/MH.jpg";
import iReg from "../assets/img/ireg-no.jpg";
import Flexboks from "../assets/img/flexboks-web.jpg";
import NNKM from "../assets/img/NNKM.jpg";

// Logos
import Robot from "../assets/img/logo-robot.png";
import SpaceLogo from "../assets/img/spacex-logo.png";
import MHlogo from "../assets/img/MH_main_logo.png";
import iRegLogo from "../assets/img/ireg-logo.png";
import FlexLogo from "../assets/img/Flexboks_logo.png";
import NNKMlogo from "../assets/img/NNKM_trans_01_white.png";

const Portfolio = (props) => {
  return (
    <>
      <Element name="portfolio"></Element>
      <Container className="portfolio-container">
        <Row>
          <Col className="portfolio-col" md={4}>
            <img
              className="portfolio_logo"
              src={Robot}
              alt="Community Science Museum Logo"
              title="CSM Logo"
            />
            <a href="https://annikaenjoy.no/portfolio/sp1/index.html">
              <img
                className="portfolio_img"
                src={CSM}
                alt="Community Science Museum Website"
                title="CSM Website"
              />
            </a>
          </Col>
          <Col className="portfolio-col" md={4}>
            <img
              className="portfolio_logo_2"
              src={SpaceLogo}
              alt="SpaceX Logo"
              title="SpaceX Logo"
            />{" "}
            <a href="https://annikaenjoy.no/portfolio/sp1/">
              <img
                className="portfolio_img"
                src={SpaceX}
                alt="SpaceX Website"
                title="SpaceX website"
              />
            </a>
          </Col>
          <Col className="portfolio-col" md={4}>
            <img
              className="portfolio_logo_3"
              src={MHlogo}
              alt="Mosjøen Hotell Logo"
              title="Mosjøen Hotell Logo"
            />{" "}
            <a href="https://mosjoenhotell.no/">
              <img
                className="portfolio_img"
                src={MH}
                alt="Mosjøen Hotell Website"
                title="Mosjøen Hotell Website"
              />
            </a>
          </Col>
          <Col className="portfolio-col" md={4}>
            <img
              className="portfolio_logo_4"
              src={iRegLogo}
              alt="iReg Logo"
              title="iReg Logo"
            />{" "}
            <a href="https://ireg.no/">
              <img
                className="portfolio_img"
                src={iReg}
                alt="iReg Website"
                title="iReg Website"
              />
            </a>
          </Col>
          <Col className="portfolio-col" md={4}>
            <img
              className="portfolio_logo_5"
              src={FlexLogo}
              alt="Flexboks Logo"
              title="Flexboks Logo"
            />{" "}
            <a href="https://flexboks.com/">
              <img
                className="portfolio_img"
                src={Flexboks}
                alt="Flexboks Website"
                title="Flexboks Website"
              />
            </a>
          </Col>
          <Col className="portfolio-col" md={4}>
            <img
              className="portfolio_logo_6"
              src={NNKMlogo}
              alt="Nord Norsk Kompetansesenter MAT Logo"
              title="NNKM Logo"
            />{" "}
            <a href="https://www.nnkmat.no/">
              <img
                className="portfolio_img"
                src={NNKM}
                alt="Nord Norsk Kompetansesenter MAT Website"
                title="NNKM Website"
              />
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
