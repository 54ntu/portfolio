import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Blogs from "./Components/Blogs";
import Footer from "./Components/Footer";
import Contacts from "./Components/Contacts";

const Appcomponent = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Blogs />
      <Contacts />
      <Footer />
    </>
  );
};

export default Appcomponent;
