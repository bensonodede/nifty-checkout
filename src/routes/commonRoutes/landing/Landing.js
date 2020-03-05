import React from "react";
import { Helmet } from "react-helmet";

// Import landing page components
import Hero from "./hero";
import Features from "./features";
import Pricing from "./pricing";
import SignUp from "./signUp";
import Footer from "./footer";

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

    {/* Sign up section */}
    <SignUp />

    {/* Footer section */}
    <Footer />
  </>
);

export default Landing;
