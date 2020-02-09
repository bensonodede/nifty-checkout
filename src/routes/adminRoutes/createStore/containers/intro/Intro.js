import React from "react";

// Import components
import IntroHeader from "./IntroHeader";
import IntroDescription from "./IntroDescription";

const Intro = () => (
  <div className="route-wrapper">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered is-vcentered">
        <div className="column is-10-mobile is-8-tablet is-4-desktop">
          <IntroHeader />
          <IntroDescription />
        </div>
      </div>
    </div>
  </div>
);

export default Intro;
