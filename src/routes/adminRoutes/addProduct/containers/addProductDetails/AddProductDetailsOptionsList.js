import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// Import components
import Button from "components/button";
import { ErrorToast } from "components/toast";
import AddProductDetailsOptionsItem from "./AddProductDetailsOptionsItem";

const AddProductDetailsOptionsList = ({ values, match, history }) => {
  const [showWaitToast, setShowWaitToast] = useState(false);

  // Destructure params
  let { storeUsername } = match.params;
  let { variants, isFilesUploaded } = values;

  return (
    <>
      {/* Edit options button */}
      <div className="add-product-details-options__edit-btn-wrapper">
        <Button
          isSmall
          isOutline
          type={"button"}
          onClick={() => {
            if (isFilesUploaded) {
              // Save scroll height to session storage
              sessionStorage.setItem(
                `add-product-form-scroll-height`,
                JSON.stringify(window.pageYOffset)
              );

              // Navigate to options page
              history.push(
                `/${storeUsername}/admin/products/add-product/options`
              );
            } else {
              setShowWaitToast(true);
            }
          }}
        >
          Edit options
        </Button>
      </div>

      {/* Options items */}
      <div className="add-product-details-options__list">
        {variants.map((variant) => (
          <AddProductDetailsOptionsItem
            key={variant.label}
            variant={variant}
            history={history}
            storeUsername={storeUsername}
            isFilesUploaded={isFilesUploaded}
          />
        ))}
      </div>

      {/* Wait for images to upload */}
      {showWaitToast && (
        <ErrorToast
          text={"Wait for images to upload"}
          emoji={"🙏"}
          onClose={() => setShowWaitToast(false)}
        />
      )}
    </>
  );
};
export default withRouter(AddProductDetailsOptionsList);
