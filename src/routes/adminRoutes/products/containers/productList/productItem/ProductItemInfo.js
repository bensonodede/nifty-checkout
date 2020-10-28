import React from "react";
import numeral from "numeral";

// Import components
import { ImgLoader } from "components/loader";

const ProductItemInfo = ({
  item: { imgUrls, name },
  remaining,
  optionsNum,
}) => (
  <div className="product-item__info">
    {/* Product image */}
    <div className={"product-item__img-container"}>
      {/* Render image if it is within range */}
      <ImgLoader
        transform={"c_thumb,g_center,r_8,w_48,h_48"}
        src={imgUrls[0]}
        alt={name}
        className={"product-item__img"}
      />
    </div>

    {/* Product content */}
    <div className="product-item__content">
      <h5 className="is-marginless is-size-6 has-text-grey-light">{name}</h5>

      <h5 className="is-marginless product-item__content-row">
        {/* Quantity (MOBILE and TABLET) */}
        <span className="is-size-7-touch is-hidden-desktop">
          {`${numeral(remaining).format("'0,0'")} left`} {" • "}{" "}
        </span>

        {/* Options */}
        <span className="is-size-7-touch is-size-6-desktop">
          {optionsNum} {optionsNum === 1 ? <>option</> : <>options</>}
        </span>
      </h5>
    </div>
  </div>
);

export default ProductItemInfo;
