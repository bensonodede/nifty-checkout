import React from "react";

const Pricing = () => (
  <div className="pricing">
    <div className="divider" />
    <h1 className="pricing__title">Pricing</h1>

    {/* Pricing image */}
    <div className="pricing__img-container">
      <img
        className="pricing__img"
        alt={"finn pricing"}
        src={
          "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1565625900/web_assets/pablo-coming-soon.png"
        }
      />
    </div>

    {/* Pricing sub-section */}
    <div className="pricing__card">
      <h1 className="pricing__sub-title">Pay low fees</h1>
      <p className="pricing__text">
        Finn is free to sign up. We charge a{" "}
        <span className="pricing__warn">2.5%</span> fee per transaction. M-pesa
        charges also apply. There are no hidden fees.
      </p>
    </div>

    {/* Pricing sub-section */}
    <div className="pricing__card">
      <h1 className="pricing__sub-title">Get paid quickly</h1>
      <p className="pricing__text">
        We send your money to your preferred M-pesa enabled phone number{" "}
        <span className="pricing__warn">everyday</span> before 10am.
      </p>
    </div>
  </div>
);

export default Pricing;
