import "../styles/Nav.css";
import CenteredSection from "./Centered";
import { BiUser, BiHeart } from "react-icons/bi";
import { Link, NavActionButton } from "./Nav/Index";
import Menu from "../components/Menu";
import { MenuItem } from "@mui/material";
import useNav from "../hooks/useNav";
import { useNavigate } from "react-router-dom";
import useScreen from "../hooks/useScreen";
import Hamburger from "./Hamburger";

const Nav = () => {
  const { isDesktop } = useScreen();
  const { navLinks, style, accountIconMenu, signOut, isLogged } = useNav();
  const navigate = useNavigate();
  const handleMenuNavigate = (to) => {
    accountIconMenu.handleClose();
    navigate(to);
  };

  return isDesktop ? (
    <CenteredSection style={style} className={"nav-desktop"}>
      <div className="nav-first">
        <div>KriffeOnline</div>
        <div className="nav-links">
          {navLinks.map((navLink, index) => (
            <Link key={index} to={navLink.to} label={navLink.label} />
          ))}
        </div>
      </div>

      <div className="nav-action-buttons">
        <NavActionButton to={"/favorites"} icon={<BiHeart size={17} />} />
        {isLogged ? (
          <Menu
            anchorEl={accountIconMenu.anchorEl}
            open={accountIconMenu.open}
            handleClose={accountIconMenu.handleClose}
            position="right"
            custom={
              <NavActionButton
                onClick={accountIconMenu.handleClick}
                icon={<BiUser size={17} />}
              />
            }
          >
            <MenuItem onClick={() => handleMenuNavigate("/")}>Home</MenuItem>
            <MenuItem onClick={signOut}>Logout</MenuItem>
          </Menu>
        ) : (
          <NavActionButton to={"/signin"} icon={<BiUser size={18} />} />
        )}
      </div>
    </CenteredSection>
  ) : (
    <Hamburger />
  );
};

export default Nav;
