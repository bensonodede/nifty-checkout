import React from "react";

// Import components
import Button from "components/button";

const OrderProductFooter = ({ mutate, id, orderStatus, loading }) => (
  <div className="order-product__section">
    <Button
      onClick={() =>
        // Run mutation to update order
        mutate({
          variables: {
            id,
            orderStatus
          }
        })
      }
      isLoading={loading}
      isLight={!orderStatus ? true : false}
      isOutline={orderStatus ? true : false}
    >
      Mark as {orderStatus ? <>pending</> : <>fulfilled</>}
    </Button>
  </div>
);

export default OrderProductFooter;
