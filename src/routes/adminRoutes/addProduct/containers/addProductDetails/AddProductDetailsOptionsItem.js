import React, { useState } from "react";

// Import components
import { Icon } from "react-icons-kit";
import { iosArrowForward } from "react-icons-kit/ionicons/iosArrowForward";
import { ErrorToast } from "components/toast";

const AddProductDetailsOptionsItem = ({
  variant,
  isFilesUploaded,
  history,
  storeUsername,
}) => {
  const [showWaitToast, setShowWaitToast] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          if (isFilesUploaded) {
            // Save scroll height to session storage
            sessionStorage.setItem(
              `add-product-form-scroll-height`,
              JSON.stringify(window.pageYOffset)
            );

            // Navigate to variant page
            history.push(
              `/${storeUsername}/admin/products/add-product/option/${variant.label}`
            );
          } else {
            setShowWaitToast(true);
          }
        }}
        className="add-product-details-options-item"
      >
        {/* Option details */}
        <div>
          <h5 className="is-size-6 is-marginless">{variant.label}</h5>
          <div className="add-product-details-options-item__info">
            {/* Option quantity */}
            <p className="is-size-6 is-marginless">
              {variant.quantity} available
            </p>

            {/* Option publish status */}
            {variant.publish ? (
              <h5 className="add-product-details-options-item__badge">
                Active
              </h5>
            ) : (
              <h5 className="add-product-details-options-item__badge add-product-details-options-item__badge--hidden">
                Hidden
              </h5>
            )}
          </div>
        </div>

        {/* Option chevron icon */}
        <div className="add-product-details-options-item__icon-wrapper">
          <Icon
            icon={iosArrowForward}
            size={"100%"}
            className="add-product-details-options-item__icon"
          />
        </div>
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

export default AddProductDetailsOptionsItem;
