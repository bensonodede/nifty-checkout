import React from "react";
import { Breakpoint, BreakpointProvider } from "react-socks";

// Import components
import { PricingMobile } from "./pricingMobile";
import { PricingDesktop } from "./pricingDesktop";

// Import styles
import "./styles.scss";

/********** Pricing component **********/

const Pricing = () => (
  <section className="pricing">
    <BreakpointProvider>
      <div className="container">
        <div className="columns is-multiline is-mobile is-centered">
          {/* Pricing header */}
          <div className="column is-full">
            <div className="divider" />
            <h1 className="title is-size-4-mobile has-text-centered">
              Pricing
            </h1>
          </div>

          {/* Pricing image */}
          <div className="column is-10-mobile is-6-tablet is-4-desktop">
            <img
              alt={"Finn pricing"}
              src={
                "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1565625900/web_assets/pablo-coming-soon.png"
              }
            />
          </div>
          {/* End Pricing image */}
        </div>

        {/********** Pricing table **********/}

        {/* Mobile pricing table */}
        <Breakpoint medium down>
          <PricingMobile />
        </Breakpoint>

        {/* Desktop pricing table */}
        <Breakpoint large up>
          <PricingDesktop />
        </Breakpoint>
      </div>
    </BreakpointProvider>
  </section>
);

export default Pricing;
