import React, { useRef } from "react";
import { Icon } from "react-icons-kit";
import { chevronRight } from "react-icons-kit/ionicons/chevronRight";
import { chevronLeft } from "react-icons-kit/ionicons/chevronLeft";
import Tooltip from "components/tooltip";

// Prev button
const PaginationPrevBtn = ({ isPrevDisabled, prevFunction = null }) => {
  // Link ref
  const prevBtnRef = useRef();

  return (
    <>
      {/* Prev button */}
      <button
        ref={prevBtnRef}
        disabled={isPrevDisabled}
        className={`pagination__btn ${
          isPrevDisabled ? "pagination__btn--disabled" : ""
        }`}
        type={"button"}
        onClick={() => {
          if (prevFunction) {
            prevFunction();
          }
        }}
      >
        <Icon
          icon={chevronLeft}
          size={"100%"}
          className="pagination__btn-icon"
        />
      </button>

      {/* Tooltip  */}
      <Tooltip text="Previous" ref={prevBtnRef} />
    </>
  );
};

// Next button
const PaginationNextBtn = ({ isNextDisabled, nextFunction = null }) => {
  // Link ref
  const nextBtnRef = useRef();

  return (
    <>
      {/* Next button */}
      <button
        ref={nextBtnRef}
        disabled={isNextDisabled}
        className={`pagination__btn ${
          isNextDisabled ? "pagination__btn--disabled" : ""
        }`}
        type={"button"}
        onClick={() => {
          if (nextFunction) {
            nextFunction();
          }
        }}
      >
        <Icon
          icon={chevronRight}
          size={"100%"}
          className="pagination__btn-icon"
        />
      </button>

      {/* Tooltip */}
      <Tooltip text={"Next"} ref={nextBtnRef} />
    </>
  );
};

export { PaginationPrevBtn, PaginationNextBtn };
