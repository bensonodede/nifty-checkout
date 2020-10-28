import React from "react";
import { Helmet } from "react-helmet";

// Import components
import { OrdersRoutes } from "./containers";

const Orders = ({ match }) => {
  // Destructure route params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Document title */}
      <Helmet title={`Orders · ${storeUsername}`} defer={false} />

      {/* Orders routes */}
      <OrdersRoutes />
    </>
  );
};

export default Orders;
