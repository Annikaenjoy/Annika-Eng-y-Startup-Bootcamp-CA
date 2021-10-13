import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AboutMe from "../components/About";
import Portfolio from "../components/Portfolio";
import ContactMe from "../components/Contact";
import Footer from "../components/Footer";

const Frontpage = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Portfolio />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Frontpage;
