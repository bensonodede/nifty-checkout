import React from "react";
import { Breakpoint } from "react-socks";

// Import components
import ProductItemOptionsMobile from "./productItemOptionsMobile";
import ProductItemOptionsDesktop from "./productItemOptionsDesktop";

const ProductItemOptions = ({ item }) => (
  <>
    {/* Mobile table */}
    <Breakpoint tablet down>
      <ProductItemOptionsMobile item={item} />
    </Breakpoint>

    {/* Desktop table */}
    <Breakpoint desktop up>
      <ProductItemOptionsDesktop item={item} />
    </Breakpoint>
  </>
);

export default ProductItemOptions;
