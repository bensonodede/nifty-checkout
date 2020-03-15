import React from "react";
import { Breakpoint, BreakpointProvider } from "react-socks";

// Import components
import ProductTableDesktop from "./productTableDesktop/";
import ProductTableMobile from "./productTableMobile/";

const ProductTable = ({ data }) => (
  <BreakpointProvider>
    {/* Mobile table */}
    <Breakpoint tablet down>
      <ProductTableMobile data={data} />
    </Breakpoint>

    {/* Desktop table */}
    <Breakpoint desktop up>
      <ProductTableDesktop data={data} />
    </Breakpoint>
  </BreakpointProvider>
);

export default ProductTable;
