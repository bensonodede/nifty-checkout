import React from "react";
import { Helmet } from "react-helmet";
import { CSSTransition } from "react-transition-group";

// Import styles
import "./styles.scss";

const Billing = ({ match }) => {
  // Destructure store name params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Page title */}
      <Helmet title={`Billing · ${storeUsername}`} defer={false} />

      {/* Billing page */}
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
            <div className="columns is-multiline is-mobile is-centered">
              <div className="column is-10">
                <div className="product-list-empty">
                  {/* Billing Emoji */}
                  <h1 className="title has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-desktop">
                    <span role="img" aria-label="balloon emoji">
                      🎈
                    </span>
                  </h1>

                  {/* Billing title */}
                  <h1 className="title has-text-centered is-marginless is-size-4-mobile is-size-3-tablet is-size-3-desktop">
                    We are still working on this...
                  </h1>

                  {/* Billing sub-title */}
                  <p className="has-text-centered has-text-grey-light is-size-6-mobile is-size-6-tablet is-size-5-desktop">
                    We'll update it very soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Billing;
