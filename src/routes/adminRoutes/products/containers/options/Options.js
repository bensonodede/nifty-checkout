import React from "react";
import { Breakpoint, BreakpointProvider } from "react-socks";

// Import components
import OptionsDesktop from "./optionsDesktop";
import OptionsMobile from "./optionsMobile";

const Options = ({ data }) => (
  <BreakpointProvider>
    {/* Mobile options  */}
    <Breakpoint tablet down>
      <OptionsMobile data={data} />
    </Breakpoint>

    {/* Desktop options */}
    <Breakpoint desktop up>
      <OptionsDesktop data={data} />
    </Breakpoint>
  </BreakpointProvider>
);

export default Options;
