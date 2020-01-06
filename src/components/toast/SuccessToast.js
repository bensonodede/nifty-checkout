import React, { useEffect } from "react";

// Import components
import { Toast, useToast } from "./index";

const SuccessToast = ({ timing, text, emoji }) => {
  // Destructure hooks
  const [isOpen, toggleToast] = useToast(false);

  // Toggle toast on load
  useEffect(() => {
    toggleToast();

    // Toggle after a certain time
    setTimeout(() => {
      toggleToast();
    }, timing);
  }, [timing]);

  return (
    <Toast isOpen={isOpen} toggleToast={toggleToast} emoji={emoji}>
      {text}
    </Toast>
  );
};

export default SuccessToast;
