import "../styles/Menu.css";
import MuiMenu from "@mui/material/Menu";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const positionMap = {
  left: {
    transformOrigin: { horizontal: "left", vertical: "top" },
    anchorOrigin: { horizontal: "left", vertical: "bottom" },
  },
  right: {
    transformOrigin: { horizontal: "right", vertical: "top" },
    anchorOrigin: { horizontal: "right", vertical: "bottom" },
  },
};

const Menu = ({
  anchorEl,
  open,
  handleClick,
  handleClose,
  children,
  selectedItem,
  label,
  custom,
  position = "left",
}) => {
  return (
    <>
      {custom ?? (
        <div onClick={handleClick} className="menu-box">
          <div className="menu-box-inner">
            <span>{selectedItem ?? label}</span>
            <span>
              <KeyboardArrowDownIcon  />
            </span>
          </div>
        </div>
      )}

      <MuiMenu
        id="basic-menu"
        disableScrollLock
        open={open}
        anchorEl={anchorEl}
        autoFocus={false}
        onClose={handleClose}
        transformOrigin={positionMap[position].transformOrigin}
        anchorOrigin={positionMap[position].anchorOrigin}
        slotProps={{
          paper: {
            elevation: 0,
            className: "menu",
            sx: {
              mt: 1,
            },
          },
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {children}
      </MuiMenu>
    </>
  );
};

export default Menu;
