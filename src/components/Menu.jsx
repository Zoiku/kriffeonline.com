import "../styles/Menu.css";
import MuiMenu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Menu = ({
  anchorEl,
  open,
  handleClick,
  handleClose,
  children,
  selectedItem,
  label,
  custom,
}) => {
  return (
    <>
      {custom ?? (
        <div onClick={handleClick} className="menu-box">
          <div className="menu-box-inner">
            <span>{selectedItem ?? label}</span>
            <span>
              <KeyboardArrowDownIcon fontSize="inherit" />
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
        slotProps={{
          paper: {
            elevation: 0,
            className: "menu",
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
