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
            <img className="portfolio_logo" src={Robot} alt="" title="" />
            <a href="https://annikaenjoy.no/portfolio/sp1/index.html">
              <img className="portfolio_img" src={CSM} alt="" title="" />
            </a>
          </Col>
          <Col className="portfolio-col" md={4}>
            {" "}
            <img className="portfolio_logo_2" src={SpaceLogo} alt="" title="" />
            <img className="portfolio_img" src={SpaceX} alt="" title="" />
          </Col>
          <Col className="portfolio-col" md={4}>
            {" "}
            <img className="portfolio_logo_3" src={MHlogo} alt="" title="" />
            <img className="portfolio_img" src={MH} alt="" title="" />
          </Col>
          <Col className="portfolio-col" md={4}>
            {" "}
            <img className="portfolio_logo_4" src={iRegLogo} alt="" title="" />
            <img className="portfolio_img" src={iReg} alt="" title="" />
          </Col>
          <Col className="portfolio-col" md={4}>
            {" "}
            <img className="portfolio_logo_5" src={FlexLogo} alt="" title="" />
            <img className="portfolio_img" src={Flexboks} alt="" title="" />
          </Col>
          <Col className="portfolio-col" md={4}>
            {" "}
            <img className="portfolio_logo_6" src={NNKMlogo} alt="" title="" />
            <img className="portfolio_img" src={NNKM} alt="" title="" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Portfolio;
