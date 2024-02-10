import "../styles/UserNav.css";
import CenteredSection from "./Centered";
import { BiUser } from "react-icons/bi";

const UserNav = () => {
  return (
    <CenteredSection className="user-nav-container">
      <nav className="user-nav">
        <div>Kriffee Online</div>
        <div className="user-nav-action-icons">
          <div className="user-nav-action-icon">
            <BiUser />
          </div>
        </div>
      </nav>
    </CenteredSection>
  );
};

export default UserNav;
