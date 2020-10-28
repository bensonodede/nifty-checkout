import React from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@apollo/react-hooks";

// Import Graphql query
import { ORDER_BY_ORDERID_QUERY } from "components/graphql/query";

// Import components
import { PageLoader } from "components/loader";
import { ErrorToast } from "components/toast";
import OrderHeader from "./orderHeader";
import OrderProducts from "./orderProducts";
import OrderPayment from "./orderPayment";
import OrderCustomer from "./orderCustomer";
import OrderDelivery from "./orderDelivery";

// Import styles
import "./styles.scss";

const Order = ({ match }) => {
  // Destructure route params
  let { storeUsername, orderId } = match.params;

  // Run gql query for order
  const { loading, error, data } = useQuery(ORDER_BY_ORDERID_QUERY, {
    variables: {
      storeUsername,
      orderId: Number(orderId),
    },
  });

  // Loading state
  if (loading) {
    return <PageLoader />;
  }

  // Error state
  if (error) {
    return <ErrorToast text={"No internet connection"} emoji={"💩"} />;
  }

  // Destructure data
  let { orderByOrderId } = data;
  let { orderProducts } = data.orderByOrderId;

  return (
    <>
      {/* Page title */}
      <Helmet title={`Order · #${orderId}`} defer={false} />

      {/* Order Page */}
      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-multiline is-mobile is-centered">
            <div className="column is-10-mobile is-6-tablet is-10-desktop">
              {/* Order Header */}
              <OrderHeader {...orderByOrderId} />

              <div className="order-grid">
                <div className="order-grid__first-column">
                  {/* Order Products */}
                  <OrderProducts products={orderProducts} />

                  {/* Order Payments */}
                  <OrderPayment {...orderByOrderId} />

                  {/* Order Customer */}
                  <OrderCustomer {...orderByOrderId} />
                </div>

                <div className="order-grid__second-column">
                  {/* Order Delivery */}
                  <OrderDelivery {...orderByOrderId} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
