import React from "react";

const How = () => (
  <div className="how">
    <div className="divider" />
    <h1 className="how__title">How it works</h1>

    {/* Step 1 */}
    <div className="how__card">
      <h1 className="how__number">
        <div className="how__number-circle" />
        <p className="how__number-text">1</p>
      </h1>
      <h1 className="how__sub-title">List your items for free</h1>
      <p className="how__text">
        Upload a photo of the item, tell us what its called and how much you are
        selling it for. Our checkout design makes your stuff look pretty.
      </p>
    </div>

    {/* Step 2 */}
    <div className="how__card">
      <h1 className="how__number">
        <div className="how__number-circle" />
        <p className="how__number-text">2</p>
      </h1>
      <h1 className="how__sub-title">Share your checkout link</h1>
      <p className="how__text">
        Send the product's checkout link to your customers.
      </p>
    </div>

    {/* Step 3 */}
    <div className="how__card">
      <h1 className="how__number">
        <div className="how__number-circle" />
        <p className="how__number-text">3</p>
      </h1>
      <h1 className="how__sub-title">Make the sale</h1>
      <p className="how__text">
        One click is all it takes. It's simple and buttery-smooth. Your
        customers are going to love it.
      </p>
    </div>
  </div>
);

export default How;
