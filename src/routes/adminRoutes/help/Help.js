import React from "react";
import { Helmet } from "react-helmet";

// Import components
import { withAuthorization } from "components/session";
import Button from "components/button";
import { Icon } from "react-icons-kit";
import { socialWhatsappOutline } from "react-icons-kit/ionicons/socialWhatsappOutline";

// Import styles
import "./styles.scss";

const Help = ({ match }) => {
  // Destructure store name params
  let { storeUsername } = match.params;

  return (
    <>
      {/* Page title */}
      <Helmet title={`Help · ${storeUsername}`} defer={false} />

      {/* Page content */}
      <div className="route-wrapper">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            <div className="column is-10-mobile is-8-tablet">
              <h1 className="title is-size-3">Hello, how can we help?</h1>
              <p>
                You'll be talking directly to the people building finn, since
                they know the product intimately, they'll have your issue sorted
                out in a jiffy.
              </p>

              {/*  */}
              <Button
                onClick={() =>
                  (window.location.href = "https://wa.me/254747645546")
                }
              >
                <span className="help-btn__icon">
                  <Icon icon={socialWhatsappOutline} size={"100%"} />
                </span>
                WhatsApp Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default withAuthorization(Help);
