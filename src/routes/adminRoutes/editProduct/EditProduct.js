import React from "react";
import { Helmet } from "react-helmet";
import { compose } from "recompose";

// Import styles
import "./styles.scss";

// Import components
import { withAuthorization, withSubscription } from "components/session";
import { EditProductHeader, EditProductForm } from "./containers";

const EditProduct = ({ match }) => {
  // Destructure route params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Document title */}
      <Helmet title={`Edit product · ${storeUsername}`} />

      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-mobile is-6-tablet is-4-desktop">
              <EditProductHeader />
              <EditProductForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default compose(withAuthorization, withSubscription)(EditProduct);
