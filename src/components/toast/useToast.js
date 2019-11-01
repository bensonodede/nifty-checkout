import { useState, useCallback } from "react";

const useToast = initial => {
  // useToast state
  const [open, setOpen] = useState(initial);

  // Toggle Toast function
  const toggleToast = useCallback(() => setOpen(status => !status));

  // Return state and toggle function
  return [open, toggleToast];
};

export default useToast;
