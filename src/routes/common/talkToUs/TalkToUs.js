import React from "react";
import { Helmet } from "react-helmet";

// Import components
import { Icon } from "react-icons-kit";
import { socialWhatsappOutline } from "react-icons-kit/ionicons/socialWhatsappOutline";

// Import styles
import "./styles.scss";

const TalkToUs = () => {
  return (
    <>
      {/* Document title */}
      <Helmet>
        <title>Finn - Talk to us</title>
      </Helmet>

      {/* Talk to us Page */}
      <div className="talk">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            {/* Talk to us logo */}
            <div className="column is-10">
              <div className="talk__img-container">
                <img
                  alt={"Finn logo"}
                  src={
                    "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566382649/web_assets/finn_pink.png"
                  }
                />
              </div>
            </div>

            {/* Talk to us content */}
            <div className="column is-10-mobile is-8-tablet is-7-desktop">
              {/* Talk to us title */}
              <h1 className="title is-size-4 has-text-centered">
                Hey there, talk to us.
              </h1>

              {/* Talk to us text */}
              <p className="has-text-centered">
                We love listening to you. Don't be shy, click the button below
                to start a conversation with us on
                <strong> whatsapp.</strong>
              </p>
            </div>

            {/* Talk to us button */}
            <div className="column is-10 talk__btn-column">
              <button
                className="button is-primary"
                onClick={() =>
                  (window.location.href = "https://wa.me/254747645546")
                }
              >
                <span>Chat</span>
                <span className="talk__btn-icon">
                  <Icon icon={socialWhatsappOutline} size={"100%"} />
                </span>
              </button>
            </div>
            {/* End Talk button */}
          </div>
        </div>
      </div>
      {/* End Talk to us page */}
    </>
  );
};
export default TalkToUs;
