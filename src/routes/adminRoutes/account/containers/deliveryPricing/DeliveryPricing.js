import React from "react";
import { Helmet } from "react-helmet";
import { CSSTransition } from "react-transition-group";

// Import components
import { DeliveryPricingHeader } from "./containers";

// Import styles
import "./styles.scss";

const DeliveryPricing = ({ match }) => {
  // Destructure store name params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Page title */}
      <Helmet title={`Delivery pricing · ${storeUsername}`} defer={false} />

      {/* Store page */}
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
                <DeliveryPricingHeader />
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default DeliveryPricing;
