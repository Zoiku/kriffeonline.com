import { useState } from "react";

const useHamburger = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return { open, handleOpen, handleClose };
};

export default useHamburger;
