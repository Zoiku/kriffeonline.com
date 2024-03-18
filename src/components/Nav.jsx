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
        <NavActionButton
          to={"/favorites"}
          icon={<FavoriteBorderRoundedIcon fontSize={"inherit"} />}
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
                icon={<AccountCircleOutlinedIcon fontSize={"inherit"} />}
              />
            }
          >
            <MenuItem onClick={() => handleMenuNavigate("/")}>Home</MenuItem>
            <MenuItem onClick={signOut}>Logout</MenuItem>
          </Menu>
        ) : (
          <NavActionButton
            to={"/signin"}
            icon={<AccountCircleOutlinedIcon fontSize={"inherit"} />}
          />
        )}
      </div>
    </CenteredSection>
  ) : (
    <div className="nav-mobile">
      <Hamburger />
      <div>KriffeOnline</div>
      {isLogged ? (
        <Menu
          anchorEl={accountIconMenu.anchorEl}
          open={accountIconMenu.open}
          handleClose={accountIconMenu.handleClose}
          position="right"
          custom={
            <NavActionButton
              onClick={accountIconMenu.handleClick}
              icon={<AccountCircleOutlinedIcon fontSize={"inherit"} />}
            />
          }
        >
          <MenuItem onClick={() => handleMenuNavigate("/")}>Home</MenuItem>
          <MenuItem onClick={signOut}>Logout</MenuItem>
        </Menu>
      ) : (
        <NavActionButton
          to={"/signin"}
          icon={<AccountCircleOutlinedIcon fontSize={"inherit"} />}
        />
      )}
    </div>
  );
};

export default Nav;
