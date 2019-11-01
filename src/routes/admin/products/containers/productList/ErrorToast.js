import React, { useEffect } from "react";

//
import { Toast, useToast } from "components/toast";

const ErrorToast = () => {
  // Destructure hooks
  const [isOpen, toggleToast] = useToast(false);

  // Toggle toast on load
  useEffect(() => {
    toggleToast();
  }, []);

  return (
    <>
      <Toast isOpen={isOpen} toggleToast={toggleToast}>
        An error occurred
      </Toast>
    </>
  );
};

export default ErrorToast;
