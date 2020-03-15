import React from "react";
import * as moment from "moment";

const ProductItemDate = ({ updatedAt }) => (
  <div className="product-item-desktop__date">
    <h5 className="is-marginless is-size-6">
      {`${moment(updatedAt).format("MMM Do, YYYY")}`}
    </h5>
  </div>
);

export default ProductItemDate;
