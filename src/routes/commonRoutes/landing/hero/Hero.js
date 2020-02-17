import React from "react";

// Import components

// Import styles
import "./styles.scss";

const Hero = () => (
  <section className="hero is-fullheight">
    {/* Middle section */}
    <div className="hero-body">
      <div className="container">
        {/* Hero title */}
        <h1 className="title hero--custom-title">
          Hi, this is finn. <br /> It's a simple way to start and run an online
          store.
        </h1>
      </div>
    </div>

    {/* Hero Footer section */}
    <div className="hero-foot hero--custom-footer">
      <div className="container">
        <h1 className="title is-size-5-mobile is-size-4-tablet is-size-3-desktop">
          Check it out{" "}
          <span role="img" aria-label="emoji">
            👇
          </span>
        </h1>
      </div>
    </div>
  </section>
);

export default Hero;
