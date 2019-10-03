import React from "react";
import { Tabs, DefaultTabBar } from "rmc-tabs";
import { StickyContainer, Sticky } from "react-sticky";
import Icon from "react-icons-kit";
import { checkmark, close } from "react-icons-kit/ionicons/";

// Import tab bar styles
import "../../../node_modules/rmc-tabs/assets/index.css";

// Import components
import PricingTable from "./PricingTable";

// Import pricing data
const PricingPlan1 = require("./pricing1.json");
const PricingPlan2 = require("./pricing2.json");

/********** Starter pricing table **********/

const StarterTable = () => (
  <PricingTable
    name={"Starter"}
    productsNo={10}
    transaction={"4% + 5"}
    subscribe={0}
    description={"Perfect for dipping your toes in."}
    emoji={"🤗"}
  >
    {/* Pricing plan 1 map features*/}

    {PricingPlan1.map(item => (
      <tr key={item.id} className="pricing__row">
        {/* pricing text */}
        <td className="pricing__cell">
          <h3 className="pricing__text">{item.feature}</h3>
        </td>

        {/* pricing icon */}
        <td className="pricing__icon-cell">
          <div className="pricing__icon-container">
            {item.available ? (
              <div className="pricing__icon">
                <Icon icon={checkmark} size={"100%"} />
              </div>
            ) : (
              <div className="pricing__icon pricing__icon--false">
                <Icon icon={close} size={"100%"} />
              </div>
            )}
          </div>
        </td>
      </tr>
    ))}
  </PricingTable>
);
/********** END Starter pricing table **********/

/********** Standard pricing table **********/
const StandardTable = () => (
  <PricingTable
    value={true}
    name={"Standard"}
    transaction={"0"}
    productsNo={200}
    subscribe={450}
    description={"Designed to grow your sales."}
    emoji={"🌿"}
  >
    {/* Pricing plan 2 map features */}
    {PricingPlan2.map(item => (
      <tr key={item.id} className="pricing__row">
        {/* pricing text */}
        <td className="pricing__cell">
          <h3 className="pricing__text">{item.feature}</h3>
        </td>

        {/* pricing icon */}
        <td className="pricing__icon-cell">
          <div className="pricing__icon-container">
            {item.available ? (
              <div className="pricing__icon">
                <Icon icon={checkmark} size={"100%"} />
              </div>
            ) : (
              <div className="pricing__icon pricing__icon--false">
                <Icon icon={close} size={"100%"} />
              </div>
            )}
          </div>
        </td>
      </tr>
    ))}
  </PricingTable>
);
/********** END Standard pricing table **********/

/********** Premium pricing table **********/
const PremiumTable = () => (
  <PricingTable
    name={"Premium"}
    transaction={"0"}
    productsNo={"Unlimited"}
    subscribe={900}
    description={"For scaling your business"}
    emoji={"🔥"}
  >
    {/* Pricing plan 2 map features */}
    {PricingPlan2.map(item => (
      <tr key={item.id} className="pricing__row">
        {/* pricing text */}
        <td className="pricing__cell">
          <h3 className="pricing__text">{item.feature}</h3>
        </td>

        {/* pricing icon */}
        <td className="pricing__icon-cell">
          <div className="pricing__icon-container">
            {item.available ? (
              <div className="pricing__icon">
                <Icon icon={checkmark} size={"100%"} />
              </div>
            ) : (
              <div className="pricing__icon pricing__icon--false">
                <Icon icon={close} size={"100%"} />
              </div>
            )}
          </div>
        </td>
      </tr>
    ))}
  </PricingTable>
);
/********** END Premium pricing table **********/

/********** Pricing component **********/

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

    <div className="pricing__tab">
      <StickyContainer>
        <Tabs
          tabs={[
            { key: "t1", title: "Starter" },
            { key: "t2", title: "Standard" },
            { key: "t3", title: "Premium" }
          ]}
          initialPage={"t2"}
          tabBarTextStyle={{
            fontFamily: "airbnb_cereal_appmedium",
            fontSize: "4.5vw",
            padding: "6vw 0vw"
          }}
          tabBarActiveTextColor={"#484848"}
          tabBarInactiveTextColor={"#c2c2c2"}
          renderTabBar={props => (
            <Sticky>
              {({ style }) => (
                <div className="pricing__tab-sticky" style={style}>
                  <DefaultTabBar
                    {...props}
                    renderUnderline={ulProps => {
                      const { style, ...tabProps } = ulProps;
                      const ulStyle = {
                        ...style,
                        border: "none"
                      };
                      return (
                        <div style={ulStyle} {...tabProps}>
                          <div
                            style={{
                              width: "25vw",
                              height: 3,
                              backgroundColor: "#f36b7f",
                              marginLeft: "auto",
                              marginRight: "auto"
                            }}
                          ></div>
                        </div>
                      );
                    }}
                  />
                </div>
              )}
            </Sticky>
          )}
        >
          <div key="t1">
            <StarterTable />
          </div>
          <div key="t2">
            <StandardTable />
          </div>
          <div key="t3">
            <PremiumTable />
          </div>
        </Tabs>
      </StickyContainer>
    </div>
  </div>
);

export default Pricing;
