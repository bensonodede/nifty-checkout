import React from "react";
import { Helmet } from "react-helmet";

// Import styles
import "./styles.scss";

const About = () => (
  <>
    {/* Document title */}
    <Helmet title={"Finn · About Finn"} />

    <div className="route-wrapper">
      <div className="container">
        <div className="columns is-mobile is-multiline is-centered is-vcentered">
          {/* About content */}
          <div className="column is-10-mobile is-7-tablet is-7-desktop">
            {/* About title */}
            <h1 className="title is-size-3-mobile is-size-2-tablet is-size-1-desktop has-text-centered-mobile">
              Hey, Wassup?{" "}
            </h1>

            {/* About sub-title */}
            <p className="has-text-grey-light is-size-6-mobile is-size-6-tablet is-size-5-desktop has-text-centered-mobile">
              Finn is a tiny team. So tiny that it's just one person.{" "}
              <span role="img" aria-label="waving-hand">
                😂
              </span>
              <br />
              The mission is to
            </p>
          </div>

          {/* about image */}
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
        </div>
      </div>
    </div>
  </>
);

export default About;
