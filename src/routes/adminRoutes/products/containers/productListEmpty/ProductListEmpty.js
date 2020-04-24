import React from "react";
import { withRouter } from "react-router-dom";

// Import components
import Button from "components/button";

// Import styles
import "./styles.scss";

const ProductListEmpty = ({ match, history }) => {
  // Destructure route params
  let { storeUsername } = match.params;

  return (
    <div className="columns is-multiline is-mobile is-centered">
      <div className="column is-10">
        <div className="product-list-empty">
          {/* List Empty Emoji */}
          <h1 className="title has-text-centered is-size-3-mobile is-size-2-tablet is-size-1-desktop">
            <span role="img" aria-label="shrug emoji">
              🍃
            </span>
          </h1>

          {/* List title */}
          <h1 className="title has-text-centered is-marginless is-size-4-mobile is-size-3-tablet is-size-3-desktop">
            Hmm, looks like there's nothing here yet.
          </h1>

          {/* List sub-title */}
          <p className="has-text-centered has-text-grey-light is-size-6-mobile is-size-6-tablet is-size-5-desktop">
            Click the button below to add your first product.
          </p>

          {/* List button */}
          <Button
            onClick={() => {
              history.push(`/${storeUsername}/admin/products/add/image`);
            }}
          >
            Add product
          </Button>
        </div>
      </div>
    </div>
  );
};
export default withRouter(ProductListEmpty);
