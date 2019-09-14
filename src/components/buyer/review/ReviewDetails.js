import React from "react";
import { CSSTransition } from "react-transition-group";
import numeral from "numeral";

// Import components
import { PulseBtn } from "../../button";
import { Icon } from "react-icons-kit";
import { arrow_right } from "react-icons-kit/ikons/arrow_right";

const ReviewDetails = props => {
  // Destructure props
  let {
    // Data props
    productData,

    // Function props
    handleClick,

    // State props
    isPaused,
    imgLoaded
  } = props;

  // Get product details
  let { name, price } = productData;

  // Format price and convert to string
  price = numeral(price).format("'0,0'");

  return (
    <div className="review__container">
      {/* Review header */}
      <CSSTransition
        in={imgLoaded}
        appear={true}
        mountOnEnter={true}
        unmountOnExit={false}
        classNames="transition__header"
        timeout={3000}
      >
        <div className="review__header">
          <p className="review__title">{name}</p>
          <p className="review__sub-title">
            <span>{price}</span>
            <span className="review__currency">KSH</span>
          </p>
        </div>
      </CSSTransition>
      {/* End Review header */}

      {/* Review footer */}
      <CSSTransition
        in={imgLoaded}
        appear={true}
        mountOnEnter={true}
        unmountOnExit={false}
        classNames="transition__footer"
        timeout={3000}
      >
        <div className="review__footer">
          <PulseBtn
            dark={false}
            onClick={() => handleClick(productData)}
            type={"button"}
            isPaused={isPaused}
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
  );
};

export default ReviewDetails;
