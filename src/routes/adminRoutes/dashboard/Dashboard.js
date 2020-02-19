import React from "react";
import { Helmet } from "react-helmet";
import { compose } from "recompose";

// Import components
import { withAuthorization, useAuth } from "components/session";
import { withFirebase } from "components/firebase";
import {
  OrderCard,
  EarningsCard,
  ProductsCard,
  FeatureCard
} from "./containers";

// Import styles
import "./styles.scss";

const Dashboard = ({ match, firebase }) => {
  // Destructure hooks
  const { authUser } = useAuth(firebase);

  let firstName = authUser.displayName;
  firstName = firstName.substr(0, firstName.indexOf(" "));

  // Destructure route params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Document title */}
      <Helmet title={`Dashboard · ${storeUsername}`} />

      {/* Dashboard */}
      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            {/* Dashboard header */}
            <div className="column is-10">
              <div className="content">
                <div className="dashboard__heading">
                  <h1 className="title is-size-3 is-marginless">
                    Hello {firstName},
                  </h1>
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

export default compose(withFirebase, withAuthorization)(Dashboard);
