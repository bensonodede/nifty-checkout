import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";

// Import Graphql query
import { PRODUCTS_COUNT } from "components/graphql/query";

// Import components
import { Icon } from "react-icons-kit";
import { ic_add } from "react-icons-kit/md/ic_add";

// Import styles
import "./styles.scss";

const ProductListHeader = ({ match, history }) => {
  // Destructure route params
  let { storeName } = match.params;

  // Query number of store products
  const { loading, error, data } = useQuery(PRODUCTS_COUNT, {
    variables: {
      storeName
    }
  });

  // Error state
  if (error) {
    return null;
  }

  // Loading state
  if (loading) {
    return null;
  }

  // Product count
  let { count } = data.productsByStoreCount;

  return (
    <div className="columns is-mobile is-multiline ">
      {/* Product header */}
      <div className="column is-6 is-vcentered">
        <h1 className="title is-size-4 is-marginless">
          {count} {count === 1 ? <span>product</span> : <span>products</span>}
        </h1>
      </div>

      {/* Add product button */}
      <div className="column has-text-right">
        <button
          onClick={() => history.push(`/${storeName}/admin/add-product`)}
          className="button is-small is-primary is-outlined"
        >
          <span className="product-list-header__add-icon">
            <Icon icon={ic_add} size={"100%"} />
          </span>
          Add new
        </button>
      </div>
      {/* End add product button */}
    </div>
  );
};

export default withRouter(ProductListHeader);
