import React, { Component } from "react";
import { Helmet } from "react-helmet";

// Import components
// import { Navbar } from "../navbar";
import Hero from "./hero";
import Features from "./features";
import Pricing from "./pricing";
import { Questions } from "./questions";
import SignUp from "./signUp";
import Footer from "./footer";

// Import styles
import "./styles.scss";
import "../../styles/animation.scss";

// Import json files
// const faq = require("./faq.json");

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        {/* Document title */}
        <Helmet>
          <title>Finn - Simple, Beautiful checkouts</title>
        </Helmet>

        {/* Navbar */}

        {/* Hero section */}
        {/* <Hero /> */}

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
  }
}

export default Landing;
