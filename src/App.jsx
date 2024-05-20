import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";
import SwitchBtn from "./components/SwitchBtn";

import Container from "./components/Container";

import "./App.css";

const App = () => {
  return (
    <Container>
      
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      {/* <Experience/> */}
      <Project />
      <Contact />
    </Container>
  );
};

export default App;
