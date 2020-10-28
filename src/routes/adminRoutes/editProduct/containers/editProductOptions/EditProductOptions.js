import React from "react";
import { Helmet } from "react-helmet";

// Import components
import EditProductOptionsFields from "./EditProductOptionsFields";

const EditProductOptions = ({ match, history, location, values }) => {
  // Destructure parameter values
  let { storeUsername, productId } = match.params;

  return (
    <>
      {/* Document title */}
      <Helmet defer={false} title={`Edit product options · ${storeUsername}`} />

      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-mobile is-6-tablet is-4-desktop">
              {/* Page title */}
              <h1 className="title is-size-3 is-marginless">
                Edit product options
              </h1>

              {/* Options field */}
              <EditProductOptionsFields
                values={values}
                history={history}
                location={location}
                storeUsername={storeUsername}
                productId={productId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProductOptions;
