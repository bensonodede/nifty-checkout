import React from "react";
import { Helmet } from "react-helmet";

import ScrollAnimation from "react-animate-on-scroll";

// Import styles
import "./styles.scss";

const AboutUs = () => (
  <div className="about">
    {/* Document title */}
    <Helmet>
      <title>Finn - About us</title>
    </Helmet>

    <div className="container">
      <ScrollAnimation
        animateIn={"fadeInUp"}
        duration={1}
        delay={100}
        offset={50}
      >
        <div className="columns is-mobile is-multiline is-centered">
          <div className="column is-9">
            {/* About title */}
            <h1 className="title has-text-centered is-size-3">
              Hey, Wassup?
              <span
                role="img"
                aria-label="waving-hand"
                className="about__emoji"
              >
                👋🏾
              </span>
            </h1>

            {/*  */}
            <div className="content">
              <p className="has-text-grey-light has-text-centered">
                Finn is a tiny team. So tiny that it's just one person. The
                mission is to
              </p>
            </div>
            {/*  */}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  </div>
);

export default AboutUs;
