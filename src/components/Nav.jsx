import "../styles/Nav.css";
import CenteredSection from "./Centered";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Link, NavActionButton } from "./Nav/Index";
import Menu from "../components/Menu";
import { MenuItem } from "@mui/material";
import useNav from "../hooks/useNav";
import { useNavigate } from "react-router-dom";
import useScreen from "../hooks/useScreen";
import useHamburger from "../hooks/useHamburger";
import Hamburger from "./Hamburger";
import logo from "../assets/logo-dark.png";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";

const Nav = () => {
  const { handleClose, handleOpen, open } = useHamburger();
  const { isDesktop } = useScreen();
  const { navLinks, style, accountIconMenu, signOut, isLogged } = useNav();
  const navigate = useNavigate();
  const handleMenuNavigate = (to) => {
    accountIconMenu.handleClose();
    navigate(to);
  };
  const handleHamburgerNavigate = (to) => {
    navigate(to);
    handleClose();
  };

  return isDesktop ? (
    <CenteredSection style={style?.desktop.styles} className={"nav-desktop"}>
      <div className="nav-first">
        <div>KriffeOnline</div>
        <div className="nav-links">
          {navLinks.map((navLink, index) => (
            <Link key={index} to={navLink.to} label={navLink.label} />
          ))}
        </div>
      </div>

      <div className="nav-action-buttons">
        <NavActionButton
          to={"/favorites"}
          icon={<FavoriteBorderRoundedIcon fontSize={"small"} />}
        />
        {isLogged ? (
          <Menu
            anchorEl={accountIconMenu.anchorEl}
            open={accountIconMenu.open}
            handleClose={accountIconMenu.handleClose}
            position="right"
            custom={
              <NavActionButton
                onClick={accountIconMenu.handleClick}
                icon={<AccountCircleOutlinedIcon fontSize={"small"} />}
              />
            }
          >
            <MenuItem onClick={() => handleMenuNavigate("/")}>Home</MenuItem>
            <MenuItem onClick={signOut}>Logout</MenuItem>
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
    <div style={style?.mobile?.styles} className="nav-mobile">
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
              <NavActionButton
                onClick={accountIconMenu.handleClick}
                icon={<PermIdentityRoundedIcon fontSize={"medium"} />}
              />
            }
          >
            <MenuItem onClick={() => handleMenuNavigate("/")}>Home</MenuItem>
            <MenuItem onClick={signOut}>Logout</MenuItem>
          </Menu>
        ) : (
          <NavActionButton
            to={"/signin"}
            icon={<PermIdentityRoundedIcon fontSize={"medium"} />}
          />
        )}
        <Hamburger
          right
          isOpen={open}
          onOpen={handleOpen}
          onClose={handleClose}
          bmBurgerBarsColor={style?.mobile?.styles?.color ?? "black"}
        >
          <div className="nav-links">
            {navLinks.map((navLink, index) => (
              <div
                className="nav-link"
                key={index}
                onClick={() => handleHamburgerNavigate(navLink.to)}
              >
                {navLink.label}
              </div>
            ))}
          </div>
        </Hamburger>
      </div>
    </div>
  );
};

export default Nav;
