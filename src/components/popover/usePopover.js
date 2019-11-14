import { useState, useCallback } from "react";

const usePopover = initial => {
  // useModal state
  const [show, setShow] = useState(initial);

  // Toggle modal function
  const togglePopover = useCallback(() => setShow(!show));

  // Return state and toggle function
  return [show, togglePopover];
};

export default usePopover;
