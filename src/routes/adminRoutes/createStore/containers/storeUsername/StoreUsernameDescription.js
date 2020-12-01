import React from "react";

// Import components
import { Icon } from "react-icons-kit";
import { locked } from "react-icons-kit/ionicons/locked";

const StoreUsernameDescription = ({ values: { storeUsername } }) => (
  <>
    {/* Store username description */}
    <p className="is-size-6 has-text-grey">
      This is what your website's address will look like.
      <span role="img" aria-label="emoji">
        👇🏾
      </span>
      <br />
      (You can add a custom domain name later)
    </p>

    {/* Device illustration */}
    <div className="device-container">
      <div className="device">
        <div className="device-address-bar">
          {/* Device address bar icon */}
          <div className="device-address-bar__icon">
            <Icon icon={locked} size={"100%"} />
          </div>

          {/* Device address bar link */}
          <h5 className="is-marginless">
            {storeUsername ? (
              <>{storeUsername}</>
            ) : (
              <span className="has-text-grey-lighter">kickasskicks</span>
            )}
            .withfinn.shop
          </h5>
        </div>
      </div>
    </div>
  </>
);

export default StoreUsernameDescription;
