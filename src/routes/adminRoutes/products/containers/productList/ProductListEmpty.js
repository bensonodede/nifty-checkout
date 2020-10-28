import React from "react";
import { withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

// Import components
import Button from "components/button";
import { Icon } from "react-icons-kit";
import { androidAdd } from "react-icons-kit/ionicons/androidAdd";

// Import styles
import "./styles.scss";

const ProductListEmpty = ({ match, history }) => {
  // Destructure route params
  let { storeUsername } = match.params;

  return (
    <CSSTransition
      in={true}
      appear={true}
      mountOnEnter={true}
      unmountOnExit={true}
      classNames={"fadeUp"}
      timeout={350}
    >
      <div className="columns is-multiline is-mobile is-centered">
        <div className="column is-12-mobile is-10-desktop">
          <div className="product-list-empty">
            {/* Empty Emoji */}
            <h1 className="title has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-desktop">
              <span role="img" aria-label="leaf emoji">
                🍃
              </span>
            </h1>

            {/* Title */}
            <h1 className="title has-text-centered is-marginless is-size-4-mobile is-size-3-tablet is-size-3-desktop">
              Hmm, looks like there's nothing here yet.
            </h1>

            {/* Sub-title */}
            <p className="has-text-centered has-text-grey-light is-size-6-mobile is-size-6-tablet is-size-5-desktop">
              Click the button below to add your first product.
            </p>

            {/* Empty button */}
            <Button
              onClick={() => {
                history.push(`/${storeUsername}/admin/products/add-product`);
              }}
              className={"product-list-empty__btn"}
              isSmall
            >
              <span>
                <Icon
                  icon={androidAdd}
                  size={"100%"}
                  className={"product-list-empty__btn-icon"}
                />
              </span>
              Add product
            </Button>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};
export default withRouter(ProductListEmpty);
