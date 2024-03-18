import { useState } from "react";

const useHamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return { isOpen, handleOpen, handleClose };
};

export default useHamburger;
