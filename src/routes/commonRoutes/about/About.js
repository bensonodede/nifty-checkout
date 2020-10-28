import React from "react";
import { Helmet } from "react-helmet";

// Import components
import HeroNavbar from "../heroNavbar";

// Import styles
import "./styles.scss";

const About = () => (
  <>
    {/* Document title */}
    <Helmet title={"Finn · About Finn"} />

    {/* Navigation bar */}
    <HeroNavbar />

    {/* About page */}
    <div className="route-wrapper-landing">
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered is-vcentered">
          {/* About content */}
          <div className="column is-10-mobile is-7-tablet is-7-desktop">
            {/* About title */}
            <h1 className="title is-size-3-mobile is-size-2-tablet is-size-1-desktop has-text-centered-mobile">
              Hey, Wassup?{" "}
              <span role="img" aria-label="pointing finger">
                👋
              </span>
            </h1>

            {/* About sub-title */}
            <p className="has-text-grey-light is-size-6-mobile is-size-6-tablet is-size-5-desktop has-text-centered-mobile">
              Finn is a tiny team. So tiny that it's just one person. Our
              mission is to create tools that make it fun and simple to run an
              online business.
            </p>
          </div>

          {/* About image */}
          <div className="column is-6-mobile is-3-tablet is-3-desktop">
            <img
              src={
                "https://res.cloudinary.com/dzxuz9zc9/image/upload/v1583587891/web_assets/Illustration_of_me.png"
              }
              alt={"Ben's illustration"}
              className="about__image"
            />
            <h3 className="title has-text-centered is-size-6-mobile is-size-6-tablet is-size-5-desktop">
              Benson Odede
            </h3>
            <h5 className="has-text-centered is-size-7-mobile is-size-7-tablet is-size-7-desktop about__subtitle">
              FOUNDER
            </h5>
          </div>
          {/* End about image */}

          {/* About footer */}
          <div className="about__footer">
            <p className="has-text-grey-light is-size-6-mobile is-size-6-tablet is-size-5-desktop has-text-centered-mobile is-marginless">
              Wanna work with me? Send me an email{" "}
              <a
                className="title is-size-6-mobile is-size-6-tablet is-size-5-desktop"
                href="mailto:bensonodede@withfinn.com?Subject=Work%20at%20finn"
                rel="noopener noreferrer"
                target="_blank"
              >
                here
              </a>{" "}
              <span role="img" aria-label="pointing finger">
                👈
              </span>
            </p>
          </div>
          {/* End about footer*/}
        </div>
      </div>
    </div>
  </>
);

export default About;
