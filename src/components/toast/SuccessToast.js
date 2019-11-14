import React, { useEffect } from "react";

// Import components
import { Toast, useToast } from "components/toast";

const SuccessToast = ({ text, emoji }) => {
  // Destructure hooks
  const [isOpen, toggleToast] = useToast(false);

  // Toggle toast on load
  useEffect(() => {
    toggleToast();

    setTimeout(() => {
      toggleToast();
    }, 1550);
  }, []);

  return (
    <Toast isOpen={isOpen} toggleToast={toggleToast} emoji={emoji}>
      {text}
    </Toast>
  );
};

export default SuccessToast;
