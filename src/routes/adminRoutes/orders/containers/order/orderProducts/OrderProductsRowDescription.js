import React from "react";
import numeral from "numeral";

const OrderProductsRowDescription = ({ product, variant }) => {
  // Define global variant variables
  let options, name, price, formattedVariant;

  // Check if product exists
  if (product) {
    options = product.options;
    name = product.name;
    price = product.price;
  }

  // Format variants
  if (variant && options) {
    formattedVariant = options.map((option, index) => {
      // Local variable
      let obj = {};

      // Assign values
      obj["option"] = variant.combinations[index];
      obj["title"] = option.title;

      return obj;
    });
  }

  return (
    <div className="order-products-row__description-wrapper">
      {product ? (
        <>
          {/* Product name */}
          <h5 className="is-size-6 order-products-row__description has-text-grey-darker">
            {name}
          </h5>

          {/* Variant */}
          {formattedVariant ? (
            <>
              {/* Variant options */}
              <p className="is-size-6 is-marginless has-text-grey-light order-products-row__description order-products-row__description--variant">
                {formattedVariant.map((item, index) => (
                  <span key={index}>
                    {item.title} : {item.option}
                  </span>
                ))}
              </p>

              {/* Variant price */}
              <p className=" is-size-6 is-marginless has-text-grey-light order-products-row__description">
                {numeral(variant.price).format("0,0")}{" "}
                <span className="is-size-7">KES</span>
              </p>
            </>
          ) : (
            <>
              {/* Product price */}
              <p className="order-products-row__description has-text-grey-light order-products-row__description--price">
                {numeral(price).format("0,0")}{" "}
                <span className="is-size-7">KES</span>
              </p>
            </>
          )}
          {/* End variant */}
        </>
      ) : (
        <h5 className="is-size-6 order-products-row__description has-text-grey-darker">
          Deleted product
        </h5>
      )}
    </div>
  );
};

export default OrderProductsRowDescription;
