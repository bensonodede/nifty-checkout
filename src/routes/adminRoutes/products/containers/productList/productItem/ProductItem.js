import React from "react";
import { useHistory, useParams } from "react-router-dom";

// Import components
import ProductItemInfo from "./ProductItemInfo";
import ProductItemPrice from "./ProductItemPrice";
import ProductItemQuantity from "./ProductItemQuantity";
import ProductItemDate from "./ProductItemDate";
import ProductItemOptions from "./productItemOptions";

// Import styles
import "./styles.scss";

const ProductItem = ({ item }) => {
  let history = useHistory();
  let { storeUsername } = useParams();

  // Define global variables
  let remaining = item.quantity;
  let optionsNum = 1;

  // If variants are present,
  if (item.variants[0]) {
    // Get active variants
    let activeVariants = item.variants.filter((variant) => variant.publish);

    // Get sum of variant quantities and assign to quantities
    remaining = activeVariants.reduce((s, a) => s + a.quantity, 0);

    // Assign options number
    optionsNum = activeVariants.length;
  }

  return (
    <tr
      onClick={() => {
        history.push(`/${storeUsername}/admin/products/edit/${item.id}`);
      }}
      className="product-item"
    >
      {/* Product info */}
      <td>
        <ProductItemInfo
          item={item}
          remaining={remaining}
          optionsNum={optionsNum}
        />
      </td>

      {/* Price */}
      <td className="is-hidden-touch">
        <ProductItemPrice price={item.price} />
      </td>

      {/* Quantity */}
      <td className="is-hidden-touch">
        <ProductItemQuantity quantity={item.quantity} remaining={remaining} />
      </td>

      {/* Updated date */}
      <td className="is-hidden-touch">
        <ProductItemDate updatedAt={item.updatedAt} />
      </td>

      {/* Options */}
      <td className="product-item__options">
        <ProductItemOptions item={item} />
      </td>
    </tr>
  );
};

export default ProductItem;
