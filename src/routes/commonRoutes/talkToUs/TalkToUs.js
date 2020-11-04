import React from "react";
import { Breakpoint } from "react-socks";
import { Helmet } from "react-helmet";

// Import components
import Button from "components/button";
import { Icon } from "react-icons-kit";
import { socialWhatsappOutline } from "react-icons-kit/ionicons/socialWhatsappOutline";

// Import styles
import "./styles.scss";

const TalkToUs = () => {
  return (
    <>
      {/* Document title */}
      <Helmet title={"Finn · Talk to us"} />

      {/* Talk to us Page */}
      <div className="route-wrapper-landing">
        <div className="container">
          <div className="columns is-mobile is-multiline is-centered">
            {/* Talk to us content */}
            <div className="column is-10-mobile is-8-tablet is-7-desktop">
              <h1 className="title is-size-3-mobile is-size-2-tablet is-size-1-desktop has-text-centered">
                Hey there, talk to us.
              </h1>

              <p className="has-text-grey-light is-size-6-mobile is-size-6-tablet is-size-5-desktop has-text-centered">
                We love listening to you. Don't be shy, click the button below
                to start a conversation with us on{" "}
                <span className="title is-size-6-mobile is-size-6-tablet is-size-5-desktop">
                  whatsapp.
                </span>
              </p>
            </div>

            {/* Talk to us button */}
            <div className="column is-10 talk__btn-column">
              <Button
                className="talk__button"
                onClick={() =>
                  (window.location.href = "https://wa.me/254747645546")
                }
              >
                <span>Chat</span>
                <span className="talk__btn-icon">
                  <Icon icon={socialWhatsappOutline} size={"100%"} />
                </span>
              </Button>
            </div>
            {/* End Talk button */}

            <Breakpoint mobile only>
              <img
                src={
                  "https://res.cloudinary.com/dzxuz9zc9/image/upload/v1582555457/web_assets/Group_of_people-mobile.png"
                }
                alt={"Group of people illustration"}
                className="talk__footer-img"
              />
            </Breakpoint>
            <Breakpoint tablet up>
              <img
                src={
                  "https://res.cloudinary.com/dzxuz9zc9/image/upload/v1582555458/web_assets/Group_of_people-desktop.png"
                }
                alt={"Group of people illustration"}
                className="talk__footer-img"
              />
            </Breakpoint>
          </div>
        </div>
      </div>
      {/* End Talk to us page */}
    </>
  );
};
export default TalkToUs;
