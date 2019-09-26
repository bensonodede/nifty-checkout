import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

// Define lottie options
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require("../../images/arrow-down-charcoal.json"),
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const Hero = () => (
  <div>
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
  </div>
);

export default Hero;
