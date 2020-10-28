import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormikContext } from "formik";

// Import components
import Button from "components/button";
import { ErrorToast } from "components/toast";

// Import styles
import "./styles.scss";

const StoreLocationMapSubmit = () => {
  // Error toast state
  const [showToast, setShowToast] = useState(false);

  // Get history
  let history = useHistory();

  // Get formik values
  let { values } = useFormikContext();

  return (
    <>
      <div className="delivery-submit">
        {/* Card title */}
        <div className="delivery-submit__title">
          <h5 className="title is-size-6 is-marginless has-text-centered">
            Set store location
          </h5>
        </div>

        {/* Card description */}
        <div className="delivery-submit__description">
          <p className="is-size-6 has-text-grey-light delivery-submit__description-text">
            Place the pin exactly where your store is located.
          </p>
          <h1 className="is-marginless is-size-3">
            <span role="img" aria-label="emoji">
              🚚
            </span>
          </h1>
        </div>

        {/* Submit button */}
        <Button
          className="delivery-submit__btn"
          isFullWidth
          type={"button"}
          onClick={async () => {
            if (values.storeLocation) {
              // Navigate to next checkout page
              history.push(`/create-store/store-location`);
            } else {
              // Show error toast
              setShowToast(true);
            }
          }}
        >
          Continue
        </Button>
      </div>

      {/* Error toast */}
      {showToast && (
        <ErrorToast
          text={"Please set a location"}
          emoji={"🌵"}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default StoreLocationMapSubmit;
