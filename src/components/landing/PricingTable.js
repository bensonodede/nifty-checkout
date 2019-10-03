import React from "react";

// Import styles
import "./styles.css";

const PricingTable = props => (
  /* Pricing table */
  <table className="pricing__table">
    <tbody>
      <tr>
        <th colSpan={2} className="pricing__table-header">
          <div className="pricing__table-tile-container">
            <h1 className="pricing__table-title">{props.name}</h1>
            {/* {props.value ? <h3>Best value</h3> : null} */}
          </div>
          {/* Pricing description */}
          <h3 className="pricing__description">
            {props.description}
            <span className="pricing__emoji"> {props.emoji}</span>
          </h3>
        </th>
      </tr>

      {/* Pricing subscription */}
      <tr className="pricing__row">
        <td className="pricing__cell">
          <h1 className="pricing__text">Monthly price</h1>
        </td>

        <td className="pricing__icon-cell">
          <div className="pricing__amount-cell">
            <h1 className="pricing__sub-title">{props.subscribe}</h1>
            <h1 className="pricing__currency">KES</h1>
          </div>
        </td>
      </tr>

      {/* Pricing transaction */}
      <tr className="pricing__row">
        <td className="pricing__cell">
          <h3 className="pricing__text">No. of products</h3>
        </td>

        <td className="pricing__icon-cell">
          <h1 className="pricing__text">{props.productsNo}</h1>
        </td>
      </tr>

      {/* Pricing transaction */}
      <tr className="pricing__row">
        <td className="pricing__cell">
          <h3 className="pricing__text">Cost per transaction</h3>
        </td>

        <td className="pricing__icon-cell">
          <h1 className="pricing__text">
            {props.transaction}
            <span className=" pricing__currency pricing__currency--transaction">
              KES
            </span>
          </h1>
        </td>
      </tr>

      {props.children}
    </tbody>
  </table>
);

export default PricingTable;
