import React from "react";
import numeral from "numeral";

// Import components
import { ImgLoader } from "components/loader";

const ProductItemInfo = ({ imgUrl, name, price }) => (
  <div className="product-item-mobile__info">
    {/* Product image */}
    <div className={"product-item-mobile__img-container"}>
      <ImgLoader
        transform={""}
        src={imgUrl}
        alt={name}
        className={"product-item-mobile__img"}
      />
    </div>

    {/* Product content */}
    <div className="product-item-mobile__content">
      <h5 className="is-marginless is-size-6">{name}</h5>

      {/* Render on mobile and tablet */}
      <h5 className="is-marginless is-size-7 product-item-mobile__price has-text-grey-light">
        {`${numeral(price).format("'0,0'")}`}{" "}
        <span className="product-item-mobile__price-currency">KSH</span>
      </h5>
    </div>
  </div>
);

export default ProductItemInfo;
