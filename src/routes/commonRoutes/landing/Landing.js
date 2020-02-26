import React, { useRef } from "react";
import { Helmet } from "react-helmet";

// Import landing page components
import Hero from "./hero";
import Features from "./features";
import Pricing from "./pricing";

const Landing = () => (
  <>
    {/* Document title */}
    <Helmet title={"Finn · Simple, Beautiful online stores"} />

    {/* Hero section */}
    <Hero />

    {/* Features section */}
    <Features />

    {/* Pricing section */}
    <Pricing />
  </>
);

export default Landing;
