import React from "react";
import { Helmet } from "react-helmet";

// Import landing page components
import Hero from "./hero";
import Features from "./features";
import Pricing from "./pricing";
import { Questions } from "./questions";
import SignUp from "./signUp";
import Footer from "./footer";

const Landing = () => (
  <div className="landing">
    {/* Document title */}
    <Helmet>
      <title>Finn - Simple, Beautiful checkouts</title>
    </Helmet>

    {/* Navbar */}

    {/* Hero section */}
    <Hero />

    {/* Features section */}
    <Features />

    {/* Pricing section */}
    <Pricing />

    {/* Questions section */}
    <Questions />

    {/* Sign up section */}
    <SignUp />

    {/* Footer section */}
    <Footer />
  </div>
);

export default Landing;
