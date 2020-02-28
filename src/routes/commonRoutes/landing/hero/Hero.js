import React from "react";

// Import components
import { HeroHeader, HeroBody, HeroFooter } from "./containers";

// Import styles
import "./styles.scss";

const Hero = () => (
  <section className="hero">
    {/* Hero header */}
    <HeroHeader />

    {/* Hero body */}
    <HeroBody />

    {/* Hero footer */}
    <HeroFooter />
  </section>
);

export default Hero;
