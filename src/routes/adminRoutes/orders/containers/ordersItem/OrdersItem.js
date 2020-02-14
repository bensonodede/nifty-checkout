import React from "react";
import * as moment from "moment";
import { withRouter } from "react-router-dom";

// Import components
import { ImgLoader } from "components/loader";

// Import styles
import "./styles.scss";

const OrdersItem = ({ item, match, history }) => {
  // Destructure route params
  let { storeUsername } = match.params;

  // Destructure item
  let { orderId, orderStatus, createdAt } = item;

  // Destructure product data
  let { name, imgUrl } = item.product;

  return (
    <tr
      onClick={() => history.push(`/${storeUsername}/admin/orders/${orderId}`)}
      className="orders-item"
    >
      <td>
        <div className="orders-item__info">
          {/* Order Image */}
          <div className="orders-item__img-container">
            <ImgLoader
              transform={""}
              src={imgUrl}
              alt={name}
              className={"orders-item__img"}
            />
          </div>

          {/* Order content */}
          <div className="content orders-item__content">
            <h5 className="is-marginless is-size-6">#{orderId}</h5>
            {/* Render on mobile and tablet */}
            <h5
              className={`${
                orderStatus ? `orders-item__status--fulfilled ` : ``
              }is-marginless is-size-7 is-hidden-desktop 
            orders-item__status`}
            >
              {orderStatus ? <>Fulfilled</> : <>Pending</>}
            </h5>
          </div>
        </div>
      </td>

      {/* Order status */}
      <td className="is-hidden-touch">
        <div>
          <div className="product-item__price">
            <h5
              className={`${
                orderStatus ? `orders-item__status--fulfilled ` : ``
              }is-marginless is-size-7-mobile is-size-7-tablet is-size-6-desktop 
            orders-item__status`}
            >
              {orderStatus ? <>Fulfilled</> : <>Pending</>}
            </h5>
          </div>
        </div>
      </td>

      {/* Order placed time */}
      <td className="is-hidden-touch">
        <div>
          <div className="product-item__price">
            <h5 className="is-marginless is-size-6">
              {moment(createdAt).fromNow()}
            </h5>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default withRouter(OrdersItem);
