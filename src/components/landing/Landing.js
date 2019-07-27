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
      autoplay: true,
      animationData: require("../../images/arrow-down-charcoal.json"),
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return (
      <div>
        <div className="App-container">
          {/********** Landing header **********/}

          {/* Header logo */}
          <div
            className="landing__logo-container"
            onClick={() => {
              this.setState({ menu: true });
            }}
          >
            <img
              className={"landing__logo"}
              alt={"isle99-logo"}
              src={require("../../images/isle99_charcoal.png")}
            />
          </div>

          {/********** Hero section **********/}
          {/* Hero image */}
          <div className="hero__img-container">
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
              Let your customers purchase anything in one click with M-pesa.
            </p>
          </div>

          {/* Hero footer */}
          <div className="hero__footer">
            <button className="hero__footer-btn">Get started</button>
          </div>

          {/* Lottie arrow animation */}
          <div className="hero__lottie">
            <Lottie options={defaultOptions} isPaused={false} />
          </div>

          {/********** End hero section **********/}

          {/********** Product demo section **********/}
          <div className="demo">
            <div className="divider" />
            <h1 className="demo__title">See it in action</h1>
            <p className="demo__text">This is what your customers will see.</p>

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

          {/********** How section **********/}
          <div className="how">
            <div className="divider" />
            <h1 className="how__title">How it works</h1>

            {/* Step 1 */}
            <div className="how__card">
              <h1 className="how__number">
                <div className="how__number-circle" />
                <p className="how__number-text">1</p>
              </h1>
              <h1 className="how__sub-title">List your items for free</h1>
              <p className="how__text">
                Upload a photo of the item, tell us what its called and how much
                you are selling it for
              </p>
            </div>

            {/* Step 2 */}
            <div className="how__card">
              <h1 className="how__number">
                <div className="how__number-circle" />
                <p className="how__number-text">2</p>
              </h1>
              <h1 className="how__sub-title">Share your checkout link</h1>
              <p className="how__text">Explaining step two over here.</p>
            </div>

            {/* Step 3 */}
            <div className="how__card">
              <h1 className="how__number">
                <div className="how__number-circle" />
                <p className="how__number-text">3</p>
              </h1>
              <h1 className="how__sub-title">Make the sale</h1>
              <p className="how__text">Explaining step three over here.</p>
            </div>
          </div>

          {/********** End how section **********/}

          {/********** Pricing section **********/}
          <div className="pricing">
            <div className="divider" />
            <h1 className="pricing__title">Pricing</h1>

            {/* Pricing image */}
            <div className="pricing__img-container">
              <img
                className="pricing__img"
                alt={"landing_header"}
                src={require("../../images/pablo-coming-soon.png")}
              />
            </div>

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

            {/* Faq image */}
            <div className="faq__img-container">
              <img
                className="faq__img"
                alt={"landing_header"}
                src={require("../../images/pablo-animal-care.png")}
              />
            </div>
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

        {/* Footer section */}
        <div className="landing__footer">
          {/* Footer logo */}

          <div className="landing__footer-logo">
            <img
              className={"landing__footer-logo-img"}
              alt={"isle99-logo"}
              src={require("../../images/isle99_pink.png")}
            />
          </div>

          {/* Footer links  */}
          <div className="landing__footer-links">
            <p className="landing__footer-text">Help</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
