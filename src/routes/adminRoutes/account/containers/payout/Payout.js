import React from "react";
import { Helmet } from "react-helmet";
import { CSSTransition } from "react-transition-group";

// Import components
import { PayoutHeader, PayoutForm } from "./containers";

// Import styles
import "./styles.scss";

const Payout = ({ match }) => {
  // Destructure store name params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Page title */}
      <Helmet title={`Edit payout info · ${storeUsername}`} defer={false} />

      {/* Payout page */}
      <CSSTransition
        in={true}
        appear={true}
        mountOnEnter={true}
        unmountOnExit={true}
        classNames={"fadeUp"}
        timeout={300}
      >
        <div className="route-wrapper">
          <div className="container">
            <div className="columns is-mobile is-multiline is-centered">
              <div className="column is-10-mobile is-6-tablet is-4-desktop">
                <PayoutHeader />
                <PayoutForm />
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Payout;
