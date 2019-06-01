import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

// Import components
import { Loader } from "../../loader";
import { PulseBtn } from "../../button";
import { Icon } from "react-icons-kit";
import { arrow_right } from "react-icons-kit/ikons/arrow_right";

// Import styles
import "./styles.css";

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      isPaused: true
    };
  }

  render() {
    let { loaded } = this.state;
    return (
      <div className="review">
        {/* Review Image */}

        <img
          onLoad={() => {
            // Set image loaded state
            this.setState({ loaded: true }, () => {
              // Play pulse animation after 10s
              setTimeout(() => {
                this.setState({ isPaused: false });
              }, 6000);
            });
          }}
          // src={require("../../../images/scott-webb-1615983-unsplash.jpg")}
          src="https://source.unsplash.com/random"
          alt="unsplash"
          className={loaded ? "review__img" : "review__img-loading"}
        />

        {loaded ? (
          <div className="review__container">
            {/* Review header */}
            <CSSTransition
              in={loaded}
              appear={true}
              mountOnEnter={true}
              unmountOnExit={true}
              classNames="transition__header"
              timeout={3000}
            >
              <div className="review__header">
                <p className="review__title">Something green</p>
                <p className="review__sub-title">
                  30,400
                  <span className="review__currency">KES</span>
                </p>
              </div>
            </CSSTransition>

            {/* Review footer */}
            <CSSTransition
              in={loaded}
              appear={true}
              mountOnEnter={true}
              unmountOnExit={true}
              classNames="transition__footer"
              timeout={3000}
            >
              <div className="review__footer">
                <PulseBtn
                  onClick={() => {
                    console.log("POP!");
                  }}
                  isPaused={this.state.isPaused}
                >
                  <Icon size={"100%"} icon={arrow_right} />
                </PulseBtn>
              </div>
            </CSSTransition>

            {/* End Review footer */}
          </div>
        ) : (
          <div className="review__loader-container">
            <div className="review__loader">
              <Loader />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Payment;
