import React from "react";
import { useMutation } from "@apollo/react-hooks";

// Import components
import Card from "components/card";
import { SuccessToast, ErrorToast } from "components/toast";

import OrderProductTally from "./OrderProductTally";
import OrderProductPayment from "./OrderProductPayment";
import OrderProductFooter from "./OrderProductFooter";

// Import graphql operations
import { TOGGLE_ORDER_STATUS } from "components/graphql/mutation";

const OrderProduct = ({ productData, paymentData, orderStatus, id }) => {
  // Destructure mutation hooks
  const [mutate, { loading, error, data }] = useMutation(TOGGLE_ORDER_STATUS);

  // Destructure payment data
  const { mpesaReceiptNumber, gross } = paymentData;

  return (
    <div className="column is-10-mobile is-10-tablet is-6-desktop">
      <Card>
        <div className="order-product">
          {/* Order product header */}
          <h1 className="title is-size-4">Product</h1>

          {/* Order product tally */}
          <OrderProductTally productData={productData} amount={gross} />

          {/* Order product payment */}
          <OrderProductPayment mpesaReceiptNumber={mpesaReceiptNumber} />

          {/* Order product footer */}
          <OrderProductFooter
            mutate={mutate}
            id={id}
            orderStatus={orderStatus}
            loading={loading}
          />
        </div>
      </Card>

      {/* Error state */}
      {error && <ErrorToast emoji={"💩"} text={"No internet connection"} />}

      {/* Success state */}
      {data && (
        <SuccessToast
          emoji={`${data.toggleOrderStatus.orderStatus ? `🌵` : `🌝`}`}
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
