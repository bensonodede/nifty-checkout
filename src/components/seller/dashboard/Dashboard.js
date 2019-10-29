import React, { Component } from "react";
import { Helmet } from "react-helmet";

// Import components
import { FadeInUp } from "../../animations";
import Card from "../../card";
import SellerNav from "../sellerNav";

// Import styles
import "./styles.scss";

const Dashboard = ({ match }) => {
  // Destructure route params
  let { storeName } = match.params;

  return (
    <FadeInUp>
      <SellerNav />
      <div className="dashboard">
        {/* Document title */}
        <Helmet>
          <title>Dashboard - {storeName}</title>
        </Helmet>

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
                    alt={" "}
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
                <div className="columns is-multiline">
                  {/*  */}
                  <div className="column is-two-thirds">
                    <Card>
                      <div className="dashboard__overview">
                        <div className="content">
                          <h1 className="title is-size-5">Orders</h1>
                          <p>Nothing here yet.</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="column">
                    <Card>
                      <div className="dashboard__overview">
                        <div className="content">
                          <h1 className="title is-size-5">Earnings</h1>
                          <p>No sales yet.</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="column is-two-thirds">
                    <Card>
                      <div className="dashboard__overview">
                        <div className="content">
                          <h1 className="title is-size-5">Products</h1>
                          <p>Nothing here yet.</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                  {/*  */}

                  {/*  */}
                  <div className="column">
                    <Card>
                      <div className="dashboard__overview">
                        <div className="content">
                          <h1 className="title is-size-5">New feature</h1>
                          <p>
                            This feature is going to grow your sales by 10% !
                          </p>
                        </div>
                        <button className="button is-primary is-outlined">
                          Try now
                        </button>
                      </div>
                    </Card>
                  </div>
                  {/*  */}
                </div>
              </div>
            </div>
            {/*End Dashboard overview items */}
          </div>
        </div>
      </div>
    </FadeInUp>
  );
};

export default Dashboard;
