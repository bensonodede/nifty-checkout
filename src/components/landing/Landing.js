import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Import components
// import { Navbar } from "../navbar";
import { Hero } from "./hero";
import { Features } from "./features";
import Pricing from "./pricing";
// import Signup from "./Signup";
// import Footer from "./Footer";

// Import styles
import "./styles.css";

// Import json files
// const faq = require("./faq.json");

class Landing extends Component {
  render() {
    return (
      <div>
        {/* Document title */}
        <Helmet>
          <title>Finn - Simple, Beautiful checkouts</title>
        </Helmet>

        <div>
          {/* Navbar */}

          {/* Hero section */}
          {/* <Hero /> */}

          {/* Features section */}
          <Features />

          {/* Pricing section */}
          <Pricing />

          {/********** FAQ section **********/}
          {/* <div className="faq">
            <div className="divider" />
            <h1 className="faq__title">Common questions </h1> */}

          {/* Faq image */}
          {/* <div className="faq__img-container">
              <img
                className="faq__img"
                alt={"finn questions"}
                src={
                  "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1565625895/web_assets/pablo-animal-care.png"
                }
              />
            </div> */}

          {/* Iterate through questions */}
          {/* {faq.map(item => (
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
          </div> */}
          {/********** End FAQ section **********/}

          {/* Signup section */}
          {/* <Signup /> */}
        </div>

        {/* Footer section */}
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Landing;
