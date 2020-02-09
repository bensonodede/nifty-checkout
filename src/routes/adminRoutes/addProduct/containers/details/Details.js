import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

// Import components
import DetailsHeader from "./DetailsHeader";
import DetailsImagePreview from "./DetailsImagePreview";
import DetailsField from "./DetailsField";

// Import styles
import "./styles.scss";

const Details = ({ match, history, values, isValid, touched }) => {
  // Destructure params
  let { storeUsername } = match.params;
  let {
    name: touchedName,
    price: touchedPrice,
    description: touchedDescription
  } = touched;

  // Redirect if image is missing
  useEffect(() => {
    if (!values.file) {
      history.push(`/${storeUsername}/admin/products/add/image`);
    }
  }, []);

  // Details validation
  let isDetailsValid = !!(
    isValid &&
    touchedName &&
    touchedPrice &&
    touchedDescription
  );

  return (
    <>
      {/* Document title */}
      <Helmet title={`Add product details · ${storeUsername}`} />

      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-mobile is-6-tablet is-4-desktop">
              <DetailsHeader />
              <DetailsImagePreview file={values.file} />
              <DetailsField isValid={isDetailsValid} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
