import React, { Component } from "react";
import Lottie from "react-lottie";

// Import styles
import "./styles.css";

class Landing extends Component {
  render() {
    // Define lottie options
    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: require("../../images/arrow-down-charcoal.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <div className="App-container">
          <div className="landing__logo">
            <img
              className={"landing__logo-img"}
              alt={"isle99-logo"}
              src={require("../../images/isle99_charcoal.png")}
            />
          </div>

          {/********** Hero section **********/}
          {/* Hero image */}
          <div className="hero">
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
              Let customers purchase anything in one click.
            </p>
          </div>

          {/* Hero footer */}
          <div className="hero__footer">
            <button className="hero__footer-btn">SIGN UP FREE</button>
          </div>

          {/* Lottie arrow animation */}
          <div className="hero__lottie">
            <Lottie options={defaultOptions} isPaused={false} />
          </div>

          {/********** End hero section **********/}

          {/********** Product demo section **********/}
          <div className="demo">
            <div className="demo__product">
              {/* Product demo mockup */}
              {/* <img
                className="demo__mockup"
                alt={"demo__mockup"}
                src={require("../../images/iphone_x_mockup.png")}
              /> */}
              {/* Product demo GIF */}
              {/* <div className="demo__gif-container">
                <img
                  className="demo__gif"
                  alt={"demo__gif"}
                  src={require("../../images/Product-demo.gif")}
                />
              </div> */}
            </div>
          </div>
          {/********** End product demo section **********/}

          {/********** Features section **********/}
          <div className="features">
            {/* First feature */}
            <div className="features__card">
              <img
                className="features__image"
                alt={"features__image"}
                src={require("../../images/ginger-cat-bad-gateway.png")}
              />
              <h1 className="features__title">No long threads</h1>
              <p className="features__text">
                It's annoying if you have to send a dozen texts just to buy a
                pair of sunglasses.
              </p>
            </div>

            {/* Second feature */}
            <div className="features__card">
              <img
                className="features__image"
                alt={"features__image"}
                src={require("../../images/ginger-cat-welcome.png")}
              />
              <h1 className="features__title">Feels like home</h1>
              <p className="features__text">
                Treat returning customers as regulars. Let your customers make a
                purchase with a single click
              </p>
            </div>

            {/* Third feature */}
            <div className="features__card">
              <img
                className="features__image"
                alt={"features__image"}
                src={require("../../images/ginger-cat-waiting.png")}
              />
              <h1 className="features__title">Zero wait times</h1>
              <p className="features__text">
                You're human, sometimes you have to poop and customers are left
                waiting for a response.
                <br />
                <br />
                Don't worry, we'll send them an SMS with all the information
                about their order.
              </p>
            </div>
          </div>

          {/********** End features section **********/}
        </div>
      </div>
    );
  }
}

export default Landing;
