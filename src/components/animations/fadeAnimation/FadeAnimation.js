import React from "react";
import { CSSTransition } from "react-transition-group";

// Import styles
import "./styles.scss";

const FadeAnimation = ({ show, children, unmountOnExit = true }) => (
  <CSSTransition
    classNames="fade-animation"
    in={show}
    timeout={500}
    unmountOnExit={unmountOnExit}
  >
    {children}
  </CSSTransition>
);

export default FadeAnimation;
