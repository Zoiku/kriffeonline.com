import "../styles/Nav.css";
import CenteredSection from "./Centered";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, NavActionButton } from "./Nav/Index";
import Menu from "../components/Menu";
import { MenuItem } from "@mui/material";
import useNav from "../hooks/useNav";
import { useNavigate } from "react-router-dom";
import useScreen from "../hooks/useScreen";
import logo from "../assets/logo-dark.png";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import Divider from "@mui/material/Divider";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Nav = () => {
  const { isDesktop } = useScreen();
  const { navLinks, style, accountIconMenu, signOut, isLogged, getUser } =
    useNav();
  const navigate = useNavigate();
  const handleMenuNavigate = (to) => {
    accountIconMenu.handleClose();
    navigate(to);
  };

  return isDesktop ? (
    <CenteredSection
      style={style?.desktop.styles ?? { borderBottom: "1px solid #f3f3f3" }}
      className={"nav-desktop"}
    >
      <div className="nav-first">
        <div onClick={() => navigate("/")} className="nav-logo">
          <img src={style?.mobile?.logo ?? logo} alt="" />
        </div>
        <div className="nav-links">
          {navLinks.map((navLink, index) => (
            <Link key={index} to={navLink.to} label={navLink.label} />
          ))}
        </div>
      </div>

      <div className="nav-action-buttons">
        {isLogged ? (
          <Menu
            anchorEl={accountIconMenu.anchorEl}
            open={accountIconMenu.open}
            handleClose={accountIconMenu.handleClose}
            position="right"
            custom={
              <div
                onClick={accountIconMenu.handleClick}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  fontWeight: 600,
                }}
              >
                <small>Hi, {String(getUser().fullname).split(" ").at(0)}</small>
                <KeyboardArrowDownIcon fontSize="inherit" />
              </div>
            }
          >
            <MenuItem onClick={() => handleMenuNavigate("/")}>Home</MenuItem>
            <Divider />
            <MenuItem onClick={signOut}>
              <ListItemIcon>
                <Logout fontSize="inherit" />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </MenuItem>
          </Menu>
        ) : (
          <NavActionButton
            to={"/signin"}
            icon={<AccountCircleOutlinedIcon fontSize={"small"} />}
          />
        )}
      </div>
    </CenteredSection>
  ) : (
    <div
      style={style?.mobile?.styles ?? { borderBottom: "1px solid #efefef" }}
      className="nav-mobile"
    >
      <div onClick={() => navigate("/")} className="nav-mobile-logo">
        <img src={style?.mobile?.logo ?? logo} alt="" />
      </div>
      <div className="nav-mobile-buttons">
        {isLogged ? (
          <Menu
            anchorEl={accountIconMenu.anchorEl}
            open={accountIconMenu.open}
            handleClose={accountIconMenu.handleClose}
            position="right"
            custom={
              <div
                onClick={accountIconMenu.handleClick}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  fontWeight: 600,
                }}
              >
                <small>Hi, {String(getUser().fullname).split(" ").at(0)}</small>
                <KeyboardArrowDownIcon fontSize="inherit" />
              </div>
            }
          >
            <MenuItem onClick={() => handleMenuNavigate("/")}>Home</MenuItem>
            <MenuItem onClick={() => handleMenuNavigate("/about")}>
              About
            </MenuItem>
            <MenuItem onClick={() => handleMenuNavigate("/marketplace")}>
              Marketplace
            </MenuItem>
            <MenuItem onClick={() => handleMenuNavigate("/contact")}>
              Contact
            </MenuItem>
            <Divider />
            <MenuItem onClick={signOut}>Logout </MenuItem>
          </Menu>
        ) : (
          <NavActionButton
            to={"/signin"}
            icon={<PermIdentityRoundedIcon fontSize={"medium"} />}
          />
        )}
      </div>
    </div>
  );
};

export default Nav;
