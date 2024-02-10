import "../styles/UserLayout.css";
import SideMenu from "../components/SideMenu";
import UserNav from "../components/UserNav";
import useSideMenu from "../hooks/useSideMenu";
import { Outlet } from "react-router-dom";
import CenteredSection from "../components/Centered";

const User = () => {
  const { SideMenuButton } = useSideMenu();

  return (
    <div className="user-layout">
      <SideMenu />
      <div className="user-layout-work-space">
        <SideMenuButton />
        <UserNav />
        <CenteredSection className="user-layout-outlet">
          <Outlet />
        </CenteredSection>
      </div>
    </div>
  );
};

export default User;
