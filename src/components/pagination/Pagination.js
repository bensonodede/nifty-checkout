import React from "react";

// Import components
import { PaginationRow } from "./containers";

// Import styles
import "./styles.scss";

const Pagination = ({
  isPrevDisabled,
  isNextDisabled,
  nextFunction,
  prevFunction,
  itemCount,
  itemSkipped,
  itemShownCount,
}) => {
  return (
    <div className="pagination">
      {/* Pagination button row (Do not render if both buttons are disabled) */}
      {(!isPrevDisabled || !isNextDisabled) && (
        <PaginationRow
          isPrevDisabled={isPrevDisabled}
          isNextDisabled={isNextDisabled}
          nextFunction={nextFunction}
          prevFunction={prevFunction}
        />
      )}

      {/* Item count */}
      <p className="has-text-grey-dark pagination__text">
        Showing {itemSkipped + 1} - {itemSkipped + itemShownCount} of{" "}
        {itemCount} items
      </p>
    </div>
  );
};

export default Pagination;
