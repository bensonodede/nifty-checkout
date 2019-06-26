import React, { Component } from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

// Import styles
import "./styles.css";

// Import questions
const faq = require("./faq.json");

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
            <h1>See it in action</h1>
            <p>This is what your customer sees</p>

            <div className="demo__product">
              {/* Product demo mockup */}
              <img
                className="demo__mockup"
                alt={"demo__mockup"}
                src={require("../../images/iphone_x_mockup.png")}
              />
              {/* Product demo GIF */}
              <div className="demo__gif-container">
                <img
                  className="demo__gif"
                  alt={"demo__gif"}
                  src={require("../../images/Product-demo.gif")}
                />
              </div>
            </div>
          </div>
          {/********** End product demo section **********/}

          {/********** How it works section **********/}
          {/* <div className="how">
            <h1>How it works in 3 steps</h1>
            <div className="how__card">

              <div>
                <h1 className="how__number">1</h1>
              </div>

              
              <h1 className="how__title">First step</h1>
            </div>
          </div> */}
          {/********** End how it works section **********/}

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

          {/********** Pricing section **********/}
          <div className="pricing">
            <div className="divider" />
            <h1 className="pricing__title">Pricing</h1>

            {/* Pricing sub-section */}
            <div className="pricing__card">
              <h1 className="pricing__sub-title">Pay low fees</h1>
              <p className="pricing__text">
                Isle99 is free to sign up. We charge a{" "}
                <span className="pricing__warn">2.5%</span> fee per transaction.
                There are no hidden fees.
              </p>
            </div>

            {/* Pricing sub-section */}
            <div className="pricing__card">
              <h1 className="pricing__sub-title">Get paid quickly</h1>
              <p className="pricing__text">
                We send your money to your preferred M-pesa enabled phone number{" "}
                <span className="pricing__warn">everyday</span> before 10am.
              </p>
            </div>
          </div>
          {/********** End pricing section **********/}

          {/********** FAQ section **********/}
          <div className="faq">
            <div className="divider" />
            <h1 className="faq__title">Common questions </h1>

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

          {/********** End common questions section **********/}
        </div>
      </div>
    );
  }
}

export default Landing;
