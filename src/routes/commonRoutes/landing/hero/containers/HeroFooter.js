import React from "react";
import { CSSTransition } from "react-transition-group";

const HeroFooter = ({ inView, onClick }) => (
  <CSSTransition
    appear={true}
    unmountOnExit={true}
    in={inView}
    classNames="hero--custom-footer__animation"
    timeout={500}
    onClick={onClick}
  >
    <div className="hero--custom-footer">
      <h5 className="title is-size-6-mobile is-size-4-tablet is-size-6-desktop is-marginless">
        What can I do with finn?{" "}
        <span role="img" aria-label="emoji">
          👇
        </span>
      </h5>
    </div>
  </CSSTransition>
);

export default HeroFooter;
