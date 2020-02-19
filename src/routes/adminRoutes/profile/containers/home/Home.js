import React from "react";
import { Helmet } from "react-helmet";

// Import components
import { HomeHeader, HomeList, HomeFooter } from "./containers";

// Import styles
import "./styles.scss";

const Home = ({ match }) => {
  // Destructure store name params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Page title */}
      <Helmet title={`Profile · ${storeUsername}`} defer={false} />

      {/* Profile page */}
      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            {/* Profile header */}
            <HomeHeader />

            {/* Profile List */}
            <HomeList />

            {/* Profile footer */}
            <HomeFooter />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
