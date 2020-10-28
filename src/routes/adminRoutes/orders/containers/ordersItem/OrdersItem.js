import React from "react";
import { withRouter } from "react-router-dom";

// Import components
import OrdersItemStatus from "./OrdersItemStatus";
import OrdersItemInfo from "./OrdersItemInfo";
import OrdersItemTime from "./OrdersItemTime";
import OrdersItemTotal from "./OrdersItemTotal";

// Import styles
import "./styles.scss";

const OrdersItem = ({ item, match, history }) => {
  // Destructure route params
  let { storeUsername } = match.params;

  // Destructure item
  let { orderProducts, orderId, orderStatus, createdAt, total } = item;

  return (
    <tr
      onClick={() => history.push(`/${storeUsername}/admin/orders/${orderId}`)}
      className="orders-item"
    >
      {/* Order info */}
      <td>
        <OrdersItemInfo
          product={orderProducts[0].product}
          orderId={orderId}
          orderStatus={orderStatus}
          createdAt={createdAt}
        />
      </td>

      {/* Order status */}
      <td className="is-hidden-touch">
        <OrdersItemStatus orderStatus={orderStatus} />
      </td>

      {/* Order placed time */}
      <td className="is-hidden-touch">
        <OrdersItemTime createdAt={createdAt} />
      </td>

      {/* Order total */}
      <td className="is-hidden-touch">
        <OrdersItemTotal total={total} />
      </td>
    </tr>
  );
};

export default withRouter(OrdersItem);
