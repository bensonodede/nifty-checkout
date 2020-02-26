import React from "react";

// Import styles
import "./styles.scss";

const Pricing = () => (
  <section className="hero">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-11-desktop">
          <div className="pricing">
            <img
              className="pricing__img"
              src={
                "https://res.cloudinary.com/dzxuz9zc9/image/upload/v1582736338/web_assets/sitting-illustration.png"
              }
              alt={"an illustrated character sitting down"}
            />
            <h1 className="">One simple price</h1>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
