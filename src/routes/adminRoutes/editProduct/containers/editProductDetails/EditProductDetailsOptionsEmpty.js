import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// Import components
import Button from "components/button";
import { ErrorToast } from "components/toast";
import { Icon } from "react-icons-kit";
import { ic_add } from "react-icons-kit/md/ic_add";

const EditProductDetailsOptionsEmpty = ({
  history,
  location,
  match,
  values,
}) => {
  const [showWaitToast, setShowWaitToast] = useState(false);

  // Destructure params
  let { storeUsername, productId } = match.params;
  let { isFilesUploaded } = values;

  return (
    <>
      {/* Options empty description */}
      <p className="is-size-6">
        Does this product come in different options? E.g Sizes or Colors
      </p>

      {/* Options add option button */}
      <Button
        type="button"
        isOutline
        isSmall
        onClick={() => {
          if (isFilesUploaded) {
            // Save scroll height to session storage
            sessionStorage.setItem(
              `edit-product-form-scroll-height`,
              JSON.stringify(window.pageYOffset)
            );

            // Navigate to options page
            history.push(
              `/${storeUsername}/admin/products/edit/${productId}/options`
            );
          } else {
            // Show wait toast
            setShowWaitToast(true);
          }
        }}
      >
        <span className="edit-product-details-options-empty__add-icon">
          <Icon icon={ic_add} size={"100%"} />
        </span>
        Add options
      </Button>

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

export default withRouter(EditProductDetailsOptionsEmpty);
