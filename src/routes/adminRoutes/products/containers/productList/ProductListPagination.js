import React from "react";
import { useHistory } from "react-router-dom";

// Import components
import Pagination from "components/pagination";

const ProductListPagination = ({
  itemCount,
  itemSkipped,
  itemShownCount,
  pageNumber,
  pageCount,
  storeUsername,
}) => {
  // Get route history
  let history = useHistory();

  return (
    <div>
      <Pagination
        // Total items
        itemCount={itemCount}
        // Skipped items
        itemSkipped={itemSkipped}
        // Items currently shown
        itemShownCount={itemShownCount}
        // If page number doesn't exist, means current page is home page(page 1) OR if on page 1
        isPrevDisabled={!pageNumber || parseInt(pageNumber) === 1}
        // If on home page and pagecount is one; disable btn
        // OR If Current page is equal to or more than total number of pages i.e last page
        isNextDisabled={
          (!pageNumber && pageCount === 1) || parseInt(pageNumber) >= pageCount
        }
        prevFunction={() => {
          history.push(
            `/${storeUsername}/admin/products/page/${parseInt(pageNumber) - 1}`
          );
        }}
        nextFunction={() => {
          history.push(
            `/${storeUsername}/admin/products/page/${parseInt(pageNumber) + 1}`
          );
        }}
      />
    </div>
  );
};

export default ProductListPagination;
