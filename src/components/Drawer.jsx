import "../styles/Drawer.css";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";

const Drawer = ({ children, open, anchor, handleClose, header }) => {
  return (
    <MuiDrawer open={open} anchor={anchor} onClose={handleClose}>
      <Box className={"drawer-box"}>
        {header && <div className="drawer-header">{header}</div>}
        <div className="drawer-body">{children}</div>
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
