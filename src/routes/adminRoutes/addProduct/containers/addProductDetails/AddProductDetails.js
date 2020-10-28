import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

// Import components
import AddProductDetailsFields from "./AddProductDetailsFields";

// Import styles
import "./styles.scss";

const AddProductDetails = ({ match, isValid, values, touched }) => {
  // Destructure parameters
  let { storeUsername } = match.params;
  let {
    name: touchedName,
    price: touchedPrice,
    imgUrls: touchedImgUrls,
    description: touchedDescription,
  } = touched;

  let isFormValid = !!(
    isValid &&
    touchedName &&
    touchedPrice &&
    touchedImgUrls &&
    touchedDescription
  );

  useEffect(() => {
    // Get scroll height from session storage
    let scrollHeight = sessionStorage.getItem("add-product-form-scroll-height");

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
      <Helmet defer={false} title={`Add a product · ${storeUsername}`} />

      {/* Page component */}
      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-mobile is-6-tablet is-4-desktop">
              {/* Page title */}
              <h1 className="title is-size-3 is-marginless">Add product</h1>

              {/* Add product details fields */}
              <AddProductDetailsFields
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

export default AddProductDetails;
