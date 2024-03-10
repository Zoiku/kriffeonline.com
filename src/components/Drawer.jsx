import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";

const Drawer = ({ children, open, anchor, handleClose }) => {
  return (
    <MuiDrawer open={open} anchor={anchor} onClose={handleClose}>
      <Box>{children}</Box>
    </MuiDrawer>
  );
};

export default Drawer;
