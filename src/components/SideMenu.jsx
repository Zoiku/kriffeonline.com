import "../styles/SideMenu.css";
import useSideMenu from "../hooks/useSideMenu";

const SideMenu = () => {
  const { className } = useSideMenu();

  return (
    <div className={`side-menu ${className}`}>
      <div className="side-menu-links">
        <div className="side-menu-link">
          <div className="side-menu-link-inner"></div>
          <div className="side-menu-link-inner"></div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
