import { NavLink, useNavigate } from "react-router-dom";

export const Link = ({ label, to }) => (
  <NavLink to={to} className={"nav-link"}>
    {label}
  </NavLink>
);

export const NavActionButton = ({ icon, to }) => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate(to)} className="nav-action-button">
      {icon}
    </div>
  );
};
