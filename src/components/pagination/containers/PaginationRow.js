import React from "react";

// Import components
import { PaginationPrevBtn, PaginationNextBtn } from "./PaginationBtn";

const PaginationRow = ({
  isPrevDisabled,
  isNextDisabled,
  prevFunction,
  nextFunction,
}) => (
  <div className="pagination__row">
    {/* Prev button */}
    <PaginationPrevBtn
      isPrevDisabled={isPrevDisabled}
      prevFunction={prevFunction}
    />

    {/* Next button */}
    <PaginationNextBtn
      isNextDisabled={isNextDisabled}
      nextFunction={nextFunction}
    />
  </div>
);

export default PaginationRow;
