import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

// Import styles
import "./styles.scss";

const FadeInUp = props => (
  <ScrollAnimation animateIn={"fadeInUp"} duration={1} delay={100}>
    {props.children}
  </ScrollAnimation>
);

export default FadeInUp;
