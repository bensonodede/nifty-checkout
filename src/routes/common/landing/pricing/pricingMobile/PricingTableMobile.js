import React from "react";
import Icon from "react-icons-kit";
import { checkmark, close } from "react-icons-kit/ionicons/";

// Import styles
import "./styles.scss";

const PricingTableMobile = props => {
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
    <table className="table pricing__table-mobile">
      {/**********  Table head **********/}

      <thead>
        {/* Tag */}
        {tag ? (
          <tr className="pricing__table-mobile-header-row">
            <th className="pricing__table-mobile-tag">{tag}</th>
          </tr>
        ) : null}

        {/* Name */}
        <tr className="pricing__table-mobile-header-row">
          <th>
            <h1 className="pricing__table-mobile-title">{name}</h1>
          </th>
        </tr>

        {/* Descritpion & emoji */}
        <tr className="pricing__table-mobile-header-row">
          <th>
            <p className="pricing__table-mobile-description">
              {description}
              <span className="pricing__table-mobile-emoji">{emoji}</span>
            </p>
          </th>
        </tr>
      </thead>

      {/**********  Table body **********/}

      <tbody className="pricing__table-mobile-body">
        {/* Subscription */}
        <tr>
          <th className="pricing__table-mobile-body-cell">
            <p className="pricing__table-mobile-body-text">Monthly price</p>
          </th>

          <td className="pricing__table-mobile-body-cell pricing__table-mobile-body-cell--right">
            <h1 className="pricing__table-mobile-body-subscription">
              {subscription}
              <span className="pricing__table-mobile-body-subscription-currency">
                KES
              </span>
            </h1>
          </td>
        </tr>

        {/* Products number */}
        <tr>
          <th className="pricing__table-mobile-body-cell">
            <p className="pricing__table-mobile-body-text">No. of products</p>
          </th>

          <td className="pricing__table-mobile-body-cell pricing__table-mobile-body-cell--right">
            <p className="pricing__table-mobile-body-text--bold">
              {productsNum}
            </p>
          </td>
        </tr>

        {/* Transaction */}
        <tr>
          <th className="pricing__table-mobile-body-cell">
            <p className="pricing__table-mobile-body-text">
              Cost per transaction
            </p>
          </th>
          <td className="pricing__table-mobile-body-cell pricing__table-mobile-body-cell--right">
            <p className="pricing__table-mobile-body-transaction">
              {transaction}
              <span className="pricing__table-mobile-body-transaction-currency">
                KES
              </span>
            </p>
          </td>
        </tr>

        {/* Features */}
        {features.map(item => (
          <tr key={item.id}>
            <th className="pricing__table-mobile-body-cell">
              <p className="pricing__table-mobile-body-text">{item.feature}</p>
            </th>
            <td className="pricing__table-mobile-body-cell pricing__table-mobile-body-cell--right">
              <div className="pricing__table-mobile-body-icon-container">
                <div
                  className={
                    item.available
                      ? `pricing__table-mobile-body-icon`
                      : `pricing__table-mobile-body-icon--gray`
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

export default PricingTableMobile;
