import React from "react";
import { CSSTransition } from "react-transition-group";

// Import components
import Loader from "../loader";

// Import styles
import "./styles.scss";

const PageLoader = ({ text }) => (
  <div className="page-loader">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered is-vcentered">
        {/* Simple loader */}
        <CSSTransition
          in={true}
          appear={true}
          mountOnEnter={true}
          unmountOnExit={true}
          classNames="simple-loader-animation"
          timeout={1500}
        >
          <div className="column is-10">
            <Loader />
          </div>
        </CSSTransition>

        {/* Loader text */}
        <CSSTransition
          in={true}
          appear={true}
          mountOnEnter={true}
          unmountOnExit={true}
          classNames="page-loader-animation"
          timeout={1500}
        >
          <div className="column is-10 is-paddingless">
            <h5 className="is-size-6 has-text-centered is-marginless">
              {text}
            </h5>
          </div>
        </CSSTransition>
      </div>
    </div>
  </div>
);

export default PageLoader;
