import React from "react";
import { Breakpoint, BreakpointProvider } from "react-socks";

// Import components
import OptionsDesktop from "./optionsDesktop";
import OptionsMobile from "./optionsMobile";

const Options = ({ data }) => (
  <BreakpointProvider>
    {/* Mobile delete  */}
    <Breakpoint medium down>
      <OptionsMobile data={data} />
    </Breakpoint>

    {/* Desktop delete */}
    <Breakpoint large up>
      <OptionsDesktop data={data} />
    </Breakpoint>
  </BreakpointProvider>
);

export default Options;
