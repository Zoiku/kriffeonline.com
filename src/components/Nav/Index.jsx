import { NavLink, useNavigate } from "react-router-dom";
import logoLight from "../../assets/logo-light.png";

export const styles = {
  "/": {
    mobile: {
      logo: logoLight,
      styles: {
        backgroundColor: "#141e24",
        color: "white",
      },
    },
    desktop: {
      logo: logoLight,
      styles: {
        backgroundColor: "#141e24",
        color: "white",
      },
    },
  },
  "/events": {
    desktop: {
      logo: logoLight,
      styles: {
        backgroundColor: "#007aa2",
        color: "black",
      },
    },
  },
};

export const Link = ({ label, to }) => (
  <NavLink to={to} className={"nav-link"}>
    {label}
  </NavLink>
);

export const NavActionButton = ({ icon, to, onClick }) => {
  const navigate = useNavigate();
  const handleAction = to ? () => navigate(to) : onClick;

  return (
    <div onClick={handleAction} className="nav-action-button">
      {icon}
    </div>
  );
};
