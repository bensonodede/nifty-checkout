import React, { Component } from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Import components
import Demo from "./Demo";
import How from "./How";
// import Features from "./Features";
import Pricing from "./Pricing";
import Signup from "./Signup";
import Footer from "./Footer";

// Import styles
import "./styles.css";

// Import questions
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
          <title>Isle99 - Simple, Beautiful checkouts</title>
        </Helmet>

        <div className="App-container">
          {/********** Landing header **********/}

          {/* Header logo */}
          <div className="landing__logo-container">
            <img
              className={"landing__logo"}
              alt={"isle99-logo"}
              src={require("../../images/isle99_charcoal.png")}
            />
          </div>

          {/********** Hero section **********/}
          {/* Hero image */}
          <div className="hero__img-container">
            <img
              className="hero__img"
              alt={"landing_header"}
              src={require("../../images/pablo-delete-confirmation.png")}
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

          {/* Product demo section */}

          <Demo />

          {/* How section */}

          <How />

          {/* Features section */}

          {/* <Features /> */}

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
                alt={"landing_header"}
                src={require("../../images/pablo-animal-care.png")}
              />
            </div>
            {/* Iterate through questions */}
            {faq.map(item => (
              <Link
                key={item.id}
                to={{
                  pathname: "/faq",
                  state: {
                    modal: true,
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
