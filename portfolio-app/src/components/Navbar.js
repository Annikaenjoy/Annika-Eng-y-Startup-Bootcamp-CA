import React from "react";
import { NavLink } from "react-router-dom";

// React Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// Logo
// import Logo from "../assets/img/Flexboks_logo.png";

const NavBar = () => {
  return (
    <>
      <Navbar sticky="top" className="navbar" bg="background" expand="lg">
        <Navbar.Brand href="/">
          {/* <img className="logo" src={Logo} alt="logo" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar-position ml-auto">
            <NavLink className="nav_link" exact to="/">
              Home
            </NavLink>
            <NavLink className="nav_link" to="/about">
              About
            </NavLink>
            <NavLink className="nav_link" to="/portfolio">
              Portfolio
            </NavLink>
            <NavLink className="nav_link" to="/contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
