import React from "react";
import { Tabs, DefaultTabBar } from "rmc-tabs";
import { StickyContainer, Sticky } from "react-sticky";

// Import pricing table
import PricingTableMobile from "./PricingTableMobile";

// Import pricing data
const data = require("../pricing.json");

const PricingMobile = () => (
  <div>
    <StickyContainer>
      <Tabs
        tabs={[
          { key: "t1", title: "Basic" },
          { key: "t2", title: "Standard" },
          { key: "t3", title: "Premium" }
        ]}
        initialPage={"t2"}
        tabBarTextStyle={{
          fontFamily: "Airbnb Cereal App Medium",
          fontSize: "1rem",
          padding: "1.2rem 0rem"
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
                            display: "flex",
                            width: "70%",
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
        {/* Basic plan tab */}
        <div key="t1">
          <PricingTableMobile data={data[0]} />
        </div>

        {/* Standard plan tab */}
        <div key="t2">
          <PricingTableMobile data={data[1]} />
        </div>

        {/* Premium plan tab */}
        <div key="t3">
          <PricingTableMobile data={data[2]} />
        </div>
      </Tabs>
    </StickyContainer>
  </div>
);

export default PricingMobile;
