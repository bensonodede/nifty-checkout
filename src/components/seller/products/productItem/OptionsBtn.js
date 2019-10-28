import React from "react";
import { Breakpoint, BreakpointProvider } from "react-socks";

// Import components
import OptionsDesktop from "./OptionsDesktop";
import OptionsMobile from "./OptionsMobile";

// Options button component
const OptionsBtn = ({ data }) => (
  <div>
    <BreakpointProvider>
      {/* Mobile options */}
      <Breakpoint medium down>
        <OptionsMobile data={data} />
      </Breakpoint>

      {/* Desktop options */}
      <Breakpoint large up>
        <OptionsDesktop data={data} />
      </Breakpoint>
    </BreakpointProvider>
  </div>
);

export default OptionsBtn;
