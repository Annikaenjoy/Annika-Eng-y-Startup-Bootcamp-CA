import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AboutMe from "../components/About";
import ContactMe from "../components/Contact";

const Frontpage = (props) => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <ContactMe />
    </>
  );
};

export default Frontpage;
