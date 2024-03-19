import "../styles/Drawer.css";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

const Drawer = ({
  bodyPadding = false,
  children,
  open,
  anchor,
  handleClose,
  header,
}) => {
  return (
    <SwipeableDrawer open={open} anchor={anchor} onClose={handleClose}>
      <Box className={"drawer-box"}>
        {header && <div className="drawer-header">{header}</div>}
        <div className={`${bodyPadding && "drawer-body-padding"} drawer-body`}>
          {children}
        </div>
      </Box>
    </SwipeableDrawer>
  );
};

export default Drawer;
