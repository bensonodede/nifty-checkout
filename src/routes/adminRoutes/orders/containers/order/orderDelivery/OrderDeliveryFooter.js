import React from "react";
import { useMutation } from "@apollo/react-hooks";

// Import components
import Button from "components/button";
import { ErrorToast, SuccessToast } from "components/toast";

// Import graphql operations
import { TOGGLE_ORDER_STATUS } from "components/graphql/mutation";

const OrderDeliveryFooter = ({ id, orderStatus }) => {
  // Destructure mutation hooks
  const [mutate, { loading, error, data }] = useMutation(TOGGLE_ORDER_STATUS);

  return (
    <div>
      <Button
        onClick={() =>
          // Run mutation to update order
          mutate({
            variables: {
              id,
              orderStatus,
            },
          })
        }
        isLoading={loading}
        isLight={!orderStatus ? true : false}
        isOutline={orderStatus ? true : false}
        isFullWidth
      >
        Mark as {orderStatus ? <>pending</> : <>fulfilled</>}
      </Button>

      {/* Error state */}
      {error && <ErrorToast emoji={"💩"} text={"No internet connection"} />}

      {/* Success state */}
      {data && (
        <SuccessToast
          emoji={`${data.toggleOrderStatus.orderStatus ? `🌵` : `🍌`}`}
          text={`Marked as ${
            data.toggleOrderStatus.orderStatus ? `fulfilled` : `pending`
          }`}
          timing={3000}
        />
      )}
    </div>
  );
};

export default OrderDeliveryFooter;
