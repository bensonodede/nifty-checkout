import React from "react";
import { Helmet } from "react-helmet";
import { Redirect } from "react-router-dom";

// Import components
import EditProductOptionFields from "./EditProductOptionFields";

const EditProductOption = ({ match, history, location, values }) => {
  // Destructure parameters
  let { storeUsername, productId, optionLabel } = match.params;
  let { variants } = values;

  // Find index of variant by option label
  let variantIndex = variants.findIndex((value) => value.label === optionLabel);

  return (
    <>
      {/* Document title */}
      <Helmet defer={false} title={`Edit option · ${optionLabel}`} />

      {/* Page component */}
      {variantIndex >= 0 ? (
        <div className="route-wrapper">
          <div className="container">
            <div className="columns is-mobile is-multiline is-centered">
              <div className="column is-10-mobile is-6-tablet is-4-desktop">
                {/* Page title */}
                <h1 className="title is-size-3 is-marginless">
                  {variants[variantIndex].label}
                </h1>

                {/* Product option fields */}
                <EditProductOptionFields
                  variantIndex={variantIndex}
                  history={history}
                  location={location}
                  storeUsername={storeUsername}
                  productId={productId}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Redirect if variant value is missing
        <Redirect to={`/${storeUsername}/admin/products/add-product`} />
      )}
    </>
  );
};

export default EditProductOption;
