import React from "react";

// Import components
import Loader from "../loader";

const ListLoader = () => (
  <div className="list-loader">
    <div className="container">
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-10">
          <Loader />
        </div>
      </div>
    </div>
  </div>
);

export default ListLoader;
