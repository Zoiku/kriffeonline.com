import { NavLink } from "react-router-dom";
import CenteredSection from "../Centered";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

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
        <div className="home-section-head-title-helper">{headingHelper}</div>
      </div>
      {to && (
        <NavLink to={to.path} className={"home-section-to-link"}>
          <div>{to.label}</div>
          <div className="home-section-to-link-icon">
            <KeyboardArrowRightIcon fontSize="small" />
          </div>
        </NavLink>
      )}
    </div>
    {children}
  </CenteredSection>
);
