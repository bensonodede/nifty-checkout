import React from "react";

// Import components
import { ImgLoader } from "components/loader";

const ProductItemInfo = ({ imgUrl, name }) => (
  <div className="product-item-desktop__info">
    {/* Product image */}
    <div className={"product-item-desktop__img-container"}>
      <ImgLoader
        transform={""}
        src={imgUrl}
        alt={name}
        className={"product-item-desktop__img"}
      />
    </div>

    {/* Product content */}
    <div className="product-item-desktop__content">
      <h5 className="is-marginless is-size-6">{name}</h5>
    </div>
  </div>
);

export default ProductItemInfo;
