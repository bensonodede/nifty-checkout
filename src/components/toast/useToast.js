import { useState, useCallback } from "react";

const useToast = initial => {
  // useToast state
  const [isOpen, setOpen] = useState(initial);

  // Toggle Toast function
  const toggleToast = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  // Return state and toggle function
  return [isOpen, toggleToast];
};

export default useToast;
