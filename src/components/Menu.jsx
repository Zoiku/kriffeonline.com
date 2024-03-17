import "../styles/Menu.css";
import MuiMenu from "@mui/material/Menu";

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
  handleClose,
  children,
  label,
  custom,
  position = "left",
}) => {
  return (
    <>
      {custom ?? (
        <select className="menu" defaultValue={null}>
          <option value={null}>{label}</option>
          {children}
        </select>
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
            className: "menu-styled",
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
