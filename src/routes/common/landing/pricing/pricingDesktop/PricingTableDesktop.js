import React from "react";
import Icon from "react-icons-kit";
import { checkmark, close } from "react-icons-kit/ionicons/";

// Import styles
import "./styles.scss";

const PricingTableDesktop = props => {
  // Table data
  const {
    tag,
    name,
    description,
    emoji,
    subscription,
    productsNum,
    transaction,
    features
  } = props.data;

  return (
    <table className="table pricing__table-desktop">
      {/**********  Table head **********/}

      <thead>
        {/* Tag */}
        {tag ? (
          <tr className="pricing__table-desktop-header-row">
            <th className="pricing__table-desktop-tag">{tag}</th>
          </tr>
        ) : null}

        {/* Name */}
        <tr className="pricing__table-desktop-header-row">
          <th>
            <h1 className="pricing__table-desktop-title">{name}</h1>
          </th>
        </tr>

        {/* Descritpion & emoji */}
        <tr className="pricing__table-desktop-header-row">
          <th>
            <p className="pricing__table-desktop-description">
              {description}
              <span className="pricing__table-desktop-emoji">{emoji}</span>
            </p>
          </th>
        </tr>
      </thead>

      {/**********  Table body **********/}

      <tbody className="pricing__table-desktop-body">
        {/* Subscription */}
        <tr>
          <th className="pricing__table-desktop-body-cell">
            <p className="pricing__table-desktop-body-text">Monthly price</p>
          </th>

          <td className="pricing__table-desktop-body-cell pricing__table-desktop-body-cell--right">
            <h1 className="pricing__table-desktop-body-subscription">
              {subscription}
              <span className="pricing__table-desktop-body-subscription-currency">
                KES
              </span>
            </h1>
          </td>
        </tr>

        {/* Products number */}
        <tr>
          <th className="pricing__table-desktop-body-cell">
            <p className="pricing__table-desktop-body-text">No. of products</p>
          </th>

          <td className="pricing__table-desktop-body-cell pricing__table-desktop-body-cell--right">
            <p className="pricing__table-desktop-body-text--bold">
              {productsNum}
            </p>
          </td>
        </tr>

        {/* Transaction */}
        <tr>
          <th className="pricing__table-desktop-body-cell">
            <p className="pricing__table-desktop-body-text">
              Cost per transaction
            </p>
          </th>
          <td className="pricing__table-desktop-body-cell pricing__table-desktop-body-cell--right">
            <p className="pricing__table-desktop-body-transaction">
              {transaction}
              <span className="pricing__table-desktop-body-transaction-currency">
                KES
              </span>
            </p>
          </td>
        </tr>

        {/* Features */}
        {features.map(item => (
          <tr key={item.id}>
            <th className="pricing__table-desktop-body-cell">
              <p className="pricing__table-desktop-body-text">{item.feature}</p>
            </th>
            <td className="pricing__table-desktop-body-cell pricing__table-desktop-body-cell--right">
              <div className="pricing__table-desktop-body-icon-container">
                <div
                  className={
                    item.available
                      ? `pricing__table-desktop-body-icon`
                      : `pricing__table-desktop-body-icon--gray`
                  }
                >
                  <Icon
                    size={"100%"}
                    icon={item.available ? checkmark : close}
                  />
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PricingTableDesktop;
