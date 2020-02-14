import React from "react";

// Import components
import { Loader } from "../loader";

// Import styles
import "./styles.scss";

const Button = ({
  className,
  children,
  onClick,
  isSmall,
  isOutline,
  isFullWidth,
  isDisabled,
  isLoading,
  isLight,
  type
}) => (
  <button
    disabled={isDisabled || isLoading}
    type={type}
    className={
      `btn` +
      (className ? ` ${className}` : ``) +
      (isOutline ? ` btn--outline` : ``) +
      (isDisabled ? ` btn--disabled` : ``) +
      (isFullWidth ? ` btn--full-width` : ``) +
      (isSmall ? ` btn--is-small` : ``)
    }
    onClick={() => {
      if (onClick) {
        onClick();
      }
    }}
  >
    {isLoading ? <Loader isLight={isLight} /> : <>{children}</>}
  </button>
);

export default Button;
