import React from "react";
import { useMutation } from "@apollo/react-hooks";

// Import components
import Card from "components/card";
import { ImgLoader } from "components/loader";

// Import graphql operations
import { TOGGLE_ORDER_STATUS } from "components/graphql/mutation";
import { SuccessToast, ErrorToast } from "components/toast";

const OrderProduct = ({ productData, paymentData, orderStatus, id }) => {
  // Destructure mutation hooks
  const [mutate, { loading, error, data }] = useMutation(TOGGLE_ORDER_STATUS);

  // Destructure product data
  const { name, imgUrl, price } = productData;

  // Destructure payment data
  const { mpesaReceiptNumber, amount } = paymentData;

  return (
    <div className="column is-10-mobile is-10-tablet is-6-desktop">
      <Card>
        <div className="order-product">
          {/* Order product header */}
          <h1 className="title is-size-4">Product</h1>

          {/***** SECTION 1 *****/}
          <div className="order-product__content">
            {/* Order product info */}
            <div className="order-product__info">
              {/* Order product image */}
              <div className="order-product__img-container">
                <ImgLoader
                  src={imgUrl}
                  alt={name}
                  transform={""}
                  className="order-product__img"
                />
              </div>

              {/* Order product name and tally */}
              <div className="order-product__tally">
                <h5 className="is-size-6 is-marginless">{name}</h5>
                <h5 className="is-size-7 is-marginless has-text-grey-light">
                  {price} <span className="order-product__currency">KES</span> ×
                  1
                </h5>
              </div>
            </div>

            {/* Order product tallied price */}
            <div>
              <h5 className="title is-size-5 is-marginless">
                {amount} <span className="order-product__currency">KES</span>
              </h5>
            </div>
          </div>

          {/***** SECTION 2 *****/}
          <div className="order-product__section">
            <p className="is-marginless is-size-6 has-text-grey-light">
              Payment method
            </p>
            <h5 className="is-marginless is-size-6">M-pesa</h5>
          </div>

          {/***** SECTION 3 *****/}
          <div className="order-product__section">
            <p className="is-marginless is-size-6 has-text-grey-light">
              Receipt no.
            </p>
            <h5 className="is-marginless is-size-6">{mpesaReceiptNumber}</h5>
          </div>

          {/***** SECTION 4 *****/}
          <div className="order-product__section">
            <button
              onClick={() =>
                // Run mutation to update order
                mutate({
                  variables: {
                    id,
                    orderStatus
                  }
                })
              }
              className={`${
                loading ? `is-loading ` : ``
              }button is-primary is-fullwidth`}
            >
              Mark as {orderStatus ? <>pending</> : <>fulfilled</>}
            </button>
          </div>
        </div>
      </Card>

      {/* Error state */}
      {error && <ErrorToast emoji={"💩"} text={"No internet connection"} />}

      {/* Success state */}
      {data && (
        <SuccessToast
          emoji={`${data.toggleOrderStatus.orderStatus ? `🟢` : `🟡`}`}
          text={`Marked as ${
            data.toggleOrderStatus.orderStatus ? `fulfilled` : `pending`
          }`}
          timing={3000}
        />
      )}
    </div>
  );
};

export default OrderProduct;
