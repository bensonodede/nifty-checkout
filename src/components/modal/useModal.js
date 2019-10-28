import { useState, useCallback } from "react";

const useModal = initial => {
  // useModal state
  const [open, setOpen] = useState(initial);

  // Toggle modal function
  const toggleModal = useCallback(() => setOpen(status => !status));

  // Return state and toggle function
  return [open, toggleModal];
};

export default useModal;
