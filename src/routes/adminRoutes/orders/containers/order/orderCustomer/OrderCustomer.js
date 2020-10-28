import React from "react";

// Import components
import Card from "components/card";
import OrderCustomerContact from "./orderCustomerContact";
import OrderCustomerLocation from "./orderCustomerLocation";

// Import styles
import "./styles.scss";

const OrderCustomer = ({ payment, deliveryLocation, store }) => (
  <div className="order-card__wrapper">
    <Card>
      <div className="order-card">
        {/* Card Title */}
        <h1 className="title is-size-5 order-card__title">Customer details</h1>

        {/* Contact */}
        <OrderCustomerContact phoneNumber={payment.phoneNumber} />

        {/* Location */}
        <OrderCustomerLocation
          deliveryLocation={deliveryLocation}
          storeLocation={store.storeLocation}
        />
      </div>
    </Card>
  </div>
);

export default OrderCustomer;
