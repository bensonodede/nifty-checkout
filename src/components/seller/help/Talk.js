import React from "react";

// Import components
import { Menu } from "../menu";
import { Icon } from "react-icons-kit";
import { socialWhatsappOutline } from "react-icons-kit/ionicons/socialWhatsappOutline";

const Talk = () => (
  <div className="App-container help">
    {/* Seller menu */}
    <Menu />

    {/* Help logo */}
    <div className="help__img-container">
      <img
        className="help__img"
        alt={"Finn logo"}
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1566382649/web_assets/finn_pink.png"
        }
      />
    </div>

    {/* Help title */}
    <h1 className="help__title">Hey there, talk to us.</h1>

    {/* Talk text */}
    <p className="talk__text">
      We love listening to you. Don't be shy, click the button below to start a
      conversation with us on
      <span className="talk__text--bold"> whatsapp.</span>
    </p>

    {/* Talk button */}
    <div
      className="talk__btn-container"
      onClick={() => (window.location.href = "https://wa.me/254724645546")}
    >
      <div className="talk__btn">
        <p className="talk__btn-text">Chat</p>
        <div className="talk__icon">
          <Icon icon={socialWhatsappOutline} size={"100%"} />
        </div>
      </div>
    </div>
    {/* End Talk button */}
  </div>
);

export default Talk;
