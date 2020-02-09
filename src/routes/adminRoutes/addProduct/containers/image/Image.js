import React from "react";
import { Helmet } from "react-helmet";

// Import components
import ImageHeader from "./ImageHeader";
import ImageField from "./ImageField";

const Image = ({ match, isValid, touched: { file: touchedFile } }) => {
  // Destructure route params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Document title */}
      <Helmet title={`Add a photo · ${storeUsername}`} />

      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-mobile is-6-tablet is-4-desktop">
              <ImageHeader />
              <ImageField isValid={!!(isValid && touchedFile)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Image;
