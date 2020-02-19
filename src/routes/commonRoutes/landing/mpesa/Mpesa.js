import React from "react";

// Import styles
import "./styles.scss";

// Import components
import { Icon } from "react-icons-kit";
import { iosCloseEmpty } from "react-icons-kit/ionicons/iosCloseEmpty";

const Mpesa = () => (
  <div className="mpesa hero has-background-black">
    <div className="container">
      <img
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/v1582049344/web_assets/finn_x_mpesa.png"
        }
        alt={""}
      />
      <h1 className="title has-text-centered has-text-white">
        Finn and m-pesa is a match made in heaven{" "}
      </h1>
    </div>
  </div>
);

export default Mpesa;
