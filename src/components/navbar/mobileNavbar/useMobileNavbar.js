import { useState, useCallback } from "react";

const useMobileNavbar = initial => {
  // useModal state
  const [isOpen, setIsOpen] = useState(initial);

  // Toggle modal function
  const toggleMobileNavbar = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  // Return state and toggle function
  return [isOpen, toggleMobileNavbar];
};

export default useMobileNavbar;
