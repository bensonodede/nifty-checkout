import React from "react";
import numeral from "numeral";
import { withRouter } from "react-router-dom";

// Import components
import Button from "components/button";
import { Icon } from "react-icons-kit";
import { ic_add } from "react-icons-kit/md/ic_add";

// Import styles
import "./styles.scss";

const ProductHeader = ({ match, history, countQuery }) => {
  // Destructure route params
  let { storeUsername, pageNumber } = match.params;

  // Query number of store products
  const { loading, error, data } = countQuery;

  // Loading and error state
  if (loading || error) {
    if (parseInt(pageNumber) === 1) {
      return null;
    } else {
      return (
        <div className="product-header">
          {/* If loading display placeholder */}
          <h1 className="title is-size-4 is-marginless product-header__count-placeholder">
            Counting products...
          </h1>
        </div>
      );
    }
  }

  // Get count
  let { count } = data.productsByStoreCount;

  // Do not render if count is 0
  if (count === 0) {
    return null;
  }

  return (
    <div className="product-header">
      {/* Product header */}
      <div className="product-header__item">
        <h1 className="title is-size-4 is-marginless">
          {`${numeral(count).format("'0,0'")}`}{" "}
          {count === 1 ? <span>product</span> : <span>products</span>}
        </h1>
      </div>

      {/* Add product button */}
      <div className="product-header__item">
        <Button
          isOutline
          isSmall
          onClick={() => {
            history.push(`/${storeUsername}/admin/products/add-product`);
          }}
        >
          <span className="product-header__add-icon">
            <Icon icon={ic_add} size={"100%"} />
          </span>
          Add new
        </Button>
      </div>

      {/* End add product button */}
    </div>
  );
};

export default withRouter(ProductHeader);
