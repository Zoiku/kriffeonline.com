import "../styles/Nav.css";
import CenteredSection from "./Centered";
import { BiUser, BiSearch, BiCartAlt, BiHeart } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import { Link, NavActionButton } from "./Nav/Index";

const Nav = () => {
  const location = useLocation();
  const styles = {
    "/": {
      backgroundColor: "rgb(20 30 36)",
      color: "white",
    },
    "/about": {
      backgroundColor: "rgba(166, 199, 255, 0.5)",
      color: "black",
    },
    "/events": {
      backgroundColor: "rgba(166, 199, 255, 0.5)",
      color: "black",
    },
  };
  const style = styles[location?.pathname];

  return (
    <div>
      <CenteredSection style={style} className={"nav-desktop"}>
        <div className="nav-first">
          <div>KriffeOnline</div>
          <div className="nav-links">
            <Link to={"/"} label={"Home"} />
            <Link to={"/about"} label={"About"} />
            <Link to={"/marketplace"} label={"Marketplace"} />
            <Link to={"/events"} label={"Events"} />
            <Link to={"/contact"} label={"Contact"} />
          </div>
        </div>
        <div className="nav-action-buttons">
          <NavActionButton icon={<BiSearch size={17} />} />
          <NavActionButton
            to={"/cart"}
            onClick
            icon={<BiCartAlt size={17} />}
          />
          <NavActionButton icon={<BiHeart size={17} />} />
          <NavActionButton to={"/signin"} icon={<BiUser size={18} />} />
        </div>
      </CenteredSection>
    </div>
  );
};

export default Nav;
