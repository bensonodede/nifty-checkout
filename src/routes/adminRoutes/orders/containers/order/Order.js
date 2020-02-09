import React from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@apollo/react-hooks";

// Import Graphql query
import { ORDER_ORDERID_QUERY } from "components/graphql/query";

// Import components
import { PageLoader } from "components/loader";
import { ErrorToast } from "components/toast";
import OrderHeader from "./OrderHeader";
import OrderContact from "./OrderContact";
import OrderProduct from "./OrderProduct";

// Import styles
import "./styles.scss";

const Order = ({ match }) => {
  // Destructure route params
  let { storeName, orderId } = match.params;

  // Run gql query for order
  const { loading, error, data } = useQuery(ORDER_ORDERID_QUERY, {
    variables: {
      storeName,
      orderId: Number(orderId)
    }
  });

  // Loading state
  if (loading) {
    return <PageLoader />;
  }

  // Error state
  if (error) {
    console.log(error);
    return <ErrorToast text={"No internet connection"} emoji={"💩"} />;
  }

  // Destructure data
  let { payment, product, id, orderStatus } = data.orderByOrderId;
  let { phoneNum } = payment;

  // Format phone number for readability
  const phoneNumMask = phoneNum.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{3})$/g,
    "+$1 ($2) $3 $4"
  );

  return (
    <>
      {/* Page title */}
      <Helmet title={`Order - #${orderId}`} defer={false} />

      {/* Order Page */}
      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-multiline is-mobile is-centered">
            {/* Order header */}
            <OrderHeader data={data.orderByOrderId} />

            {/* Order product*/}
            <OrderProduct
              productData={product}
              paymentData={payment}
              id={id}
              orderStatus={orderStatus}
            />

            {/* Order contact */}
            <OrderContact phoneNum={phoneNum} phoneNumMask={phoneNumMask} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
