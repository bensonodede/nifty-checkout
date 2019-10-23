import React from "react";
import { Breakpoint, BreakpointProvider } from "react-socks";
import ScrollAnimation from "react-animate-on-scroll";

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
            <ScrollAnimation
              animateIn={"fadeInUp"}
              duration={1}
              delay={100}
              offset={50}
            >
              <div className="divider" />
              <h1 className="title is-size-4-mobile has-text-centered">
                Pricing
              </h1>
            </ScrollAnimation>
          </div>

          {/* Pricing image */}
          <div className="column is-10-mobile is-6-tablet is-4-desktop">
            <ScrollAnimation
              animateIn={"fadeInUp"}
              duration={1}
              delay={100}
              offset={50}
            >
              <img
                alt={"Finn pricing"}
                src={
                  "https://res.cloudinary.com/dzxuz9zc9/image/upload/q_auto/v1565625900/web_assets/pablo-coming-soon.png"
                }
              />
            </ScrollAnimation>
          </div>
          {/* End Pricing image */}
        </div>

        {/********** Pricing table **********/}

        {/* Mobile pricing table */}
        <Breakpoint medium down>
          <ScrollAnimation
            animateIn={"fadeInUp"}
            duration={1}
            delay={100}
            offset={50}
          >
            <PricingMobile />
          </ScrollAnimation>
        </Breakpoint>

        {/* Desktop pricing table */}
        <Breakpoint large up>
          <ScrollAnimation
            animateIn={"fadeInUp"}
            duration={1}
            delay={100}
            offset={50}
          >
            <PricingDesktop />
          </ScrollAnimation>
        </Breakpoint>
      </div>
    </BreakpointProvider>
  </section>
);

export default Pricing;
