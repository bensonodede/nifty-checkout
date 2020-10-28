import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

// Import components
import EditProductDetailsFields from "./EditProductDetailsFields";

// Import styles
import "./styles.scss";

const EditProductDetails = ({ match, isValid, values, dirty }) => {
  // Destructure parameters
  let { storeUsername } = match.params;

  // Define form validation
  let isFormValid = !!(isValid && dirty);

  useEffect(() => {
    // Get scroll height from session storage
    let scrollHeight = sessionStorage.getItem(
      "edit-product-form-scroll-height"
    );

    // Scroll to scroll height
    if (scrollHeight) {
      setTimeout(() => {
        window.scrollTo({
          top: JSON.parse(scrollHeight),
          behavior: "smooth",
        });
      }, 150);
    }
  }, []);

  return (
    <>
      {/* Document title */}
      <Helmet defer={false} title={`Edit product · ${storeUsername}`} />

      {/* Page component */}
      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-mobile is-6-tablet is-4-desktop">
              {/* Page title */}
              <h1 className="title is-size-3 is-marginless">Edit product</h1>

              {/* Add product details fields */}
              <EditProductDetailsFields
                isFormValid={isFormValid}
                values={values}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProductDetails;
