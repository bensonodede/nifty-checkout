import React from "react";
import { Helmet } from "react-helmet";
import SellerNav from "../sellerNav";
import OrderList from "./orderList/OrderList";

const Orders = ({ match }) => {
  // Store name params
  let { storeName } = match.params;

  return (
    <>
      {/* Document title */}
      <Helmet>
        <title>Orders - {storeName}</title>
      </Helmet>

      {/* Navbar */}
      <SellerNav />

      {/* Order list */}
      <div className="orders">
        <OrderList />
      </div>
    </>
  );
};

export default Orders;
