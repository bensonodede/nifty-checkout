import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

// Import components
import { Loader } from "../../loader";
import { PulseBtn } from "../../button";
import { Icon } from "react-icons-kit";
import { arrow_right } from "react-icons-kit/ikons/arrow_right";

// Import styles
import "./styles.css";

class Review extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const { cookies } = props;

    this.state = {
      phoneNum: cookies.get("phoneNum") || null,
      loaded: false,
      isPaused: true
    };
  }

  handleClick = () => {
    let { storeName, productId } = this.props.match.params;
    let { phoneNum } = this.state;

    if (phoneNum) {
      //
      console.log("One click checkout: ");
      console.log(phoneNum);
      this.props.history.push(`/${storeName}/${productId}/phoneNum`);
    } else {
      this.props.history.push(`/${storeName}/${productId}/phoneNum`);
    }
  };

  render() {
    let { loaded } = this.state;

    return (
      <div className="review">
        {/* Review Image */}

        <img
          onLoad={() => {
            // Set image loaded state
            this.setState({ loaded: true }, () => {
              // Play pulse animation after 5s
              setTimeout(() => {
                this.setState({ isPaused: false });
              }, 5000);
            });
          }}
          src={require("../../../images/scott-webb-1615983-unsplash.jpg")}
          // src="https://source.unsplash.com/random"
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
              unmountOnExit={false}
              classNames="transition__header"
              timeout={3000}
            >
              <div className="review__header">
                <p className="review__title">Something green</p>
                <p className="review__sub-title">
                  30,400
                  <span className="review__currency">KSH</span>
                </p>
              </div>
            </CSSTransition>

            {/* Review footer */}
            <CSSTransition
              in={loaded}
              appear={true}
              mountOnEnter={true}
              unmountOnExit={false}
              classNames="transition__footer"
              timeout={3000}
            >
              <div className="review__footer">
                <PulseBtn
                  dark={false}
                  onClick={this.handleClick}
                  type={"button"}
                  isPaused={this.state.isPaused}
                  btnStyle={"review__btn"}
                >
                  <div className="review__icon">
                    <Icon size={"100%"} icon={arrow_right} />
                  </div>
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

export default withCookies(Review);
