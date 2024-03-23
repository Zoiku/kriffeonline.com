import "../styles/Drawer.css";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/Drawer";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { IconButton } from "@mui/material";

const Drawer = ({
  bodyPadding = false,
  children,
  handleClose,
  open,
  anchor,
  header,
}) => {
  return (
    <SwipeableDrawer
      open={open}
      anchor={anchor}
      PaperProps={{
        elevation: 0,
        square: false,
      }}
    >
      <Box className={"drawer-box"}>
        {header && (
          <div className="drawer-header">
            <div>{header}</div>
            <IconButton onClick={handleClose}>
              <CloseRoundedIcon />
            </IconButton>
          </div>
        )}
        <div className={`${bodyPadding && "drawer-body-padding"} drawer-body`}>
          {children}
        </div>
      </Box>
    </SwipeableDrawer>
  );
};

export default Drawer;
