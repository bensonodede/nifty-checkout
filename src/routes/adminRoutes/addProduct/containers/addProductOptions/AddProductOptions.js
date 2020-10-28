import React from "react";
import { Helmet } from "react-helmet";

// Import components
import AddProductOptionsFields from "./AddProductOptionsFields";

const AddProductOptions = ({ match, history, values }) => {
  // Destructure parameter values
  let { storeUsername } = match.params;

  return (
    <>
      {/* Document title */}
      <Helmet defer={false} title={`Add product options · ${storeUsername}`} />

      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-mobile is-6-tablet is-4-desktop">
              {/* Page title */}
              <h1 className="title is-size-3 is-marginless">
                Add product options
              </h1>

              {/* Options field */}
              <AddProductOptionsFields
                values={values}
                history={history}
                storeUsername={storeUsername}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProductOptions;
