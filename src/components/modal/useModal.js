import { useState, useCallback } from "react";

const useModal = initial => {
  // useModal state
  const [isOpen, setIsOpen] = useState(initial);

  // Toggle modal function
  const toggleModal = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  // Return state and toggle function
  return [isOpen, toggleModal];
};

export default useModal;
