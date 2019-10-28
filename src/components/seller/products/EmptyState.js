import React from "react";
import { Link } from "react-router-dom";

// Import styles
import "./styles.scss";

const EmptyState = props => (
  <div className="App-container product__empty">
    <h1 className="product__empty-title">No products yet.</h1>
    <p className="product__empty-text">
      Click the button below to add your first product.
    </p>

    {/* Link to create product form */}
    <Link
      to={`/${props.storeName}/add-product`}
      style={{ textDecoration: "none" }}
    >
      <button className="product__empty-btn">Add product</button>
    </Link>

    {/* Empty state image */}
    <img
      className="product__empty-img"
      alt={"no_internet"}
      src={
        "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1565625899/web_assets/pablo-no-comments.png"
      }
    />
  </div>
);

export default EmptyState;
