import React from "react";

// Import functions
import { getTimeFromNow } from "utils";

const ProductItemDate = ({ updatedAt }) => (
  <h5 className="is-marginless is-size-6 has-text-grey-light time__from-now">
    {getTimeFromNow(updatedAt)}
  </h5>
);

export default ProductItemDate;
