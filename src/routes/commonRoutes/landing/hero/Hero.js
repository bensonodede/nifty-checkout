import React from "react";

// Import components
import HeroNavbar from "../../heroNavbar";
import { HeroBody, HeroFooter } from "./containers";

// Import styles
import "./styles.scss";

const Hero = () => (
  <section className="hero">
    {/* Hero navbar*/}
    <HeroNavbar />

    {/* Hero body */}
    <HeroBody />

    {/* Hero footer */}
    <HeroFooter />
  </section>
);

export default Hero;
