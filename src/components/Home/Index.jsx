import { NavLink } from "react-router-dom";
import CenteredSection from "../Centered";

export const HomeSectionWithHeading = ({
  children,
  heading,
  headingHelper,
  to,
}) => (
  <CenteredSection className="home-section">
    <div className="home-section-head">
      <div className={"home-section-head-text"}>
        <div className="home-section-head-title">{heading}</div>
        <div>{headingHelper}</div>
      </div>
      {to && (
        <NavLink
          style={{ color: "unset", textDecoration: "unset" }}
          to={to.path}
        >
          {to.label}
        </NavLink>
      )}
    </div>
    {children}
  </CenteredSection>
);
