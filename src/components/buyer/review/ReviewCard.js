import React from "react";
import { CSSTransition } from "react-transition-group";

//
import "./styles.css";

//
const ReviewCard = props => (
  <CSSTransition
    in={props.in}
    mountOnEnter={true}
    unmountOnExit={true}
    classNames="transition__card"
    timeout={3000}
  >
    <div className="review__card">{props.children}</div>
  </CSSTransition>
);

export default ReviewCard;
