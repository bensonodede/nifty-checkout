import React from "react";
import numeral from "numeral";

// Import components
import { ImgLoader } from "components/loader";
import { Icon } from "react-icons-kit";
import { ic_image } from "react-icons-kit/md/ic_image";

const OrderProductTally = ({ productData, amount }) => {
  // Destructure product data
  let name, imgUrl, price;

  // Check if product exists
  if (productData) {
    name = productData.name;
    imgUrl = productData.imgUrl;
    price = productData.price;
  }

  return (
    <>
      <div className="order-product__content">
        {/* Order product info */}
        <div className="order-product__info">
          {/* Order product image */}
          {productData ? (
            <div className="order-product__img-container">
              <ImgLoader
                src={imgUrl}
                alt={name}
                transform={""}
                className="order-product__img"
              />
            </div>
          ) : (
            <div className="order-item__img-placeholder-container">
              <div className="order-item__img-placeholder">
                <Icon icon={ic_image} size={"100%"} />
              </div>
            </div>
          )}

          {/* Order product name and tally */}
          <div className="order-product__tally">
            {productData ? (
              <>
                <h5 className="is-size-6 is-marginless order-product__tally-name">
                  {name}
                </h5>
                <h5 className="is-size-6 is-marginless has-text-grey-light">
                  {" "}
                  {`${numeral(price).format("'0,0'")}`}{" "}
                  <span className="order-product__currency">KES</span> × 1
                </h5>
              </>
            ) : (
              <>
                <h5 className="is-size-6 is-marginless order-product__tally-name">
                  This product was deleted
                </h5>
              </>
            )}
          </div>
        </div>

        {/* Order product tallied price */}
        <h5 className="title is-size-5 is-marginless is-hidden-mobile">
          {`${numeral(amount).format("'0,0'")}`}{" "}
          <span className="order-product__currency">KES</span>
        </h5>
      </div>

      {/*  */}
      <div className="order-product__section is-hidden-tablet">
        <p className="is-marginless is-size-6 has-text-grey-light">Total</p>
        <h5 className="title is-size-5 is-marginless">
          {`${numeral(amount).format("'0,0'")}`}{" "}
          <span className="order-product__currency">KES</span>
        </h5>
      </div>
    </>
  );
};
export default OrderProductTally;
