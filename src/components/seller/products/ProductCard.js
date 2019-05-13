import React from "react";
import numeral from "numeral";

// Import styles
import "./styles.css";

// Product card
const ProductCard = props => {
  let { name, price, imgUrl } = props;
  return (
    <div className="product-card">
      <img src={imgUrl} alt={name} className="product-card__img" />
      <div className="product-card__content">
        <p className="product-card__name">{name}</p>
        <div className="product-card__price">
          <p className="product-card__price-text">{`${numeral(price).format(
            "'0,0'"
          )}`}</p>
          <p className="product-card__currency">KES</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
