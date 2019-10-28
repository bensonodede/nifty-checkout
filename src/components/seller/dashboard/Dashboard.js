import React, { Component } from "react";
import { Helmet } from "react-helmet";

// Import styles
import "./styles.scss";
import ProductList from "../products/productList";

class Dashboard extends Component {
  render() {
    // Destructure route params
    let { storeName } = this.props.match.params;

    return (
      <div className="dashboard">
        {/* Document title */}
        <Helmet>
          <title>Dashboard - {storeName}</title>
        </Helmet>

        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            {/* Dashboard header */}
            <div className="column is-10-mobile is-10-tablet is-12-desktop">
              <h1 className="title is-size-4">Dashboard</h1>
            </div>

            {/* Dashboard product list */}
            <div className="column is-10-mobile is-10-tablet is-12-desktop">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
