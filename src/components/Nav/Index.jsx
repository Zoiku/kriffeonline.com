import { NavLink, useNavigate } from "react-router-dom";

export const styles = {
  "/": {
    backgroundColor: "rgb(20 30 36)",
    color: "white",
  },
  "/about": {
    backgroundColor: "rgba(166, 199, 255)",
    color: "black",
  },
  "/events": {
    backgroundColor: "rgba(166, 199, 255)",
    color: "black",
  },
  "/contact": {
    backgroundColor: "rgb(20 30 36)",
    color: "white",
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
