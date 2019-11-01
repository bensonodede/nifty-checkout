import React from "react";
import { Helmet } from "react-helmet";

// Import components
import {
  OrderCard,
  EarningsCard,
  ProductsCard,
  FeatureCard
} from "./containers";
// import SellerNav from "../sellerNav";

// Import styles
import "./styles.scss";

const Dashboard = ({ match }) => {
  // Destructure route params
  let { storeName } = match.params;

  return (
    <>
      {/* Document title */}
      <Helmet>
        <title>Dashboard - {storeName}</title>
      </Helmet>

      {/* Navbar */}
      {/* <SellerNav /> */}

      {/* Dashboard */}
      <div className="dashboard">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            {/* Dashboard header */}
            <div className="column is-10">
              <div className="content">
                <div className="dashboard__heading">
                  <h1 className="title is-size-3 is-marginless">Hello</h1>
                  <img
                    className={"dashboard__emoji"}
                    src={require("../../../images/waving-hand-sign_emoji.png")}
                    alt={"waving-hand"}
                  />
                </div>

                <p className="has-text-grey-light">
                  Here's an overview of your store today.
                </p>
              </div>
            </div>

            {/* Dashboard overview items */}
            <div className="column is-10">
              <div className="container">
                <div className="columns is-multiline is-centered is-desktop">
                  {/* Order Card */}
                  <OrderCard />

                  {/* Earnings Card */}
                  <EarningsCard />

                  {/* Products Card */}
                  <ProductsCard />

                  {/* Feature Card */}
                  <FeatureCard />
                </div>
              </div>
            </div>
            {/*End Dashboard overview items */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
