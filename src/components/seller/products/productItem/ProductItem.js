import React from "react";

// Import components
import OptionsBtn from "./OptionsBtn";

// Import styles
import "./styles.scss";

const ProductItem = ({ data }) => {
  // Destructure props
  const { name, imgUrl, price } = data;

  // Render component
  return (
    <>
      {/* Table */}
      <tr>
        {/* Product cell */}
        <td className="product__item">
          <div className="product-item__info">
            {/* Product image */}
            <img src={imgUrl} alt={name} className="product-item__img" />

            {/* Product content */}
            <div className="content product-item__content">
              <h5 className="is-marginless is-size-6">{name}</h5>
              {/* Render on mobile and tablet */}
              <h5 className="is-marginless is-size-7 is-hidden-desktop product-item__details has-text-grey-light">
                4,300{" "}
                <span className="product-item__price-currency--mobile">
                  KSH
                </span>
                <span className="product__item-dot"> · </span>
                Oct 10
              </h5>
            </div>
          </div>
        </td>

        {/* Desktop: Price cell */}
        <td className="product__item is-hidden-touch">
          <div className="product-item__price">
            <h5 className="is-marginless is-size-6">
              4,300<span className="product-item__price-currency">KSH</span>
            </h5>
          </div>
        </td>

        {/* Desktop: Modified cell */}
        <td className="product__item is-hidden-touch">
          <div className="product-item__date">
            <h5 className="is-marginless is-size-6">October 10, 2019</h5>
          </div>
        </td>

        {/* Options cell */}
        <td className="product__item">
          <div className="product-item__option">
            <OptionsBtn data={data} />
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductItem;
