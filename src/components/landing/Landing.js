import React, { Component } from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Import components
import Features from "./Features";
import Pricing from "./pricing";
import Signup from "./Signup";
import Footer from "./Footer";

// Import styles
import "./styles.css";

// Import json files
const faq = require("./faq.json");

class Landing extends Component {
  render() {
    // Define lottie options
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require("../../images/arrow-down-charcoal.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        {/* Document title */}
        <Helmet>
          <title>Finn - Simple, Beautiful checkouts</title>
        </Helmet>

        <div className="App-container">
          {/********** Landing header **********/}

          {/* Header logo */}
          <div className="landing__logo-container">
            <img
              className={"landing__logo"}
              alt={"finn logo"}
              src={
                "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566382649/web_assets/finn_pink.png"
              }
            />
          </div>

          {/********** Hero section **********/}

          {/* Hero image */}
          <div className="hero__img-container">
            <img
              className="hero__img"
              alt={"finn hero"}
              src={
                "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1565625948/web_assets/pablo-delete-confirmation.png"
              }
            />
          </div>

          {/* Hero title */}
          <div className="hero__header">
            <h1 className="hero__title">Simple, beautiful checkouts.</h1>
            <p className="hero__text">
              Let your customers purchase anything in one click with M-pesa.
            </p>
          </div>

          {/* Hero footer */}
          <div className="hero__footer">
            <Link to="/login">
              <button className="hero__footer-btn">Get started</button>
            </Link>
          </div>

          {/* Lottie arrow animation */}
          <div className="hero__lottie">
            <Lottie
              options={defaultOptions}
              isPaused={false}
              isClickToPauseDisabled={true}
            />
          </div>

          {/********** End hero section **********/}

          {/* Features section */}

          <Features />

          {/* Pricing section */}

          <Pricing />

          {/********** FAQ section **********/}
          <div className="faq">
            <div className="divider" />
            <h1 className="faq__title">Common questions </h1>

            {/* Faq image */}
            <div className="faq__img-container">
              <img
                className="faq__img"
                alt={"finn questions"}
                src={
                  "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1565625895/web_assets/pablo-animal-care.png"
                }
              />
            </div>

            {/* Iterate through questions */}
            {faq.map(item => (
              <Link
                key={item.id}
                to={{
                  pathname: "/faq",
                  state: {
                    item
                  }
                }}
              >
                <p className="faq__question">{item.question}</p>
              </Link>
            ))}
          </div>
          {/********** End FAQ section **********/}

          {/* Signup section */}
          <Signup />
        </div>

        {/* Footer section */}
        <Footer />
      </div>
    );
  }
}

export default Landing;
