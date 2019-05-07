import React from "react";

//
import "../../styles/seller/Products.css";
const ProductCard = props => (
  <div className="product-card">
    <img src={props.imgUrl} alt={props.name} className="product-card__img" />
    <p className="product-card__content">{props.id}</p>
  </div>
);

export default ProductCard;
