import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Import styles
import "./styles.css";

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPaused: true,
      show: false
    };
  }

  //
  componentDidMount() {
    //
    setTimeout(() => {
      this.setState({ show: true });
    }, 1000);

    //
    setTimeout(() => {
      this.setState({ isPaused: false });
    }, 10000);
  }

  render() {
    return (
      <div className="review">
        {/* <TransitionGroup> */}
        {/* Review Image */}
        <img
          src={require("../../../images/scott-webb-1615983-unsplash.jpg")}
          alt="unsplash"
          className="review__img"
        />

        {/* Review card */}

        <div className="review__container">
          {/* Review header */}
          <CSSTransition
            in={this.state.show}
            mountOnEnter={true}
            unmountOnExit={true}
            classNames="transition__header"
            timeout={3000}
          >
            <div className="review__header">
              <p className="review__title">Something reddish</p>
              <p className="review__sub-title">
                30,400
                <span className="review__currency">KES</span>
              </p>
            </div>
          </CSSTransition>

          {/* Review footer */}
          <CSSTransition
            in={this.state.show}
            mountOnEnter={false}
            unmountOnExit={true}
            classNames="transition__header"
            timeout={3000}
          >
            <div className="review__footer">
              <div className="review__btn">
                <p className="review__btn-text">Next</p>
              </div>
            </div>
          </CSSTransition>
          {/* End Review footer */}
        </div>
      </div>
    );
  }
}

export default Payment;
