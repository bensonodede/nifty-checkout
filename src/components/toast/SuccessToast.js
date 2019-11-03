import React, { useEffect } from "react";

// Import components
import { Toast, useToast } from "components/toast";

const SuccessToast = ({ text }) => {
  // Destructure hooks
  const [isOpen, toggleToast] = useToast(false);

  // Toggle toast on load
  useEffect(() => {
    toggleToast();
  }, []);

  return (
    <Toast isOpen={isOpen} toggleToast={toggleToast}>
      {text}
    </Toast>
  );
};

export default SuccessToast;
