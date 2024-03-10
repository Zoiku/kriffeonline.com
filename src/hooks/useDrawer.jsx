import { useState } from "react";

const useDrawer = (anchor) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return {
    anchor,
    open,
    handleOpen,
    handleClose,
  };
};

export default useDrawer;
