import { atom, useAtom } from "jotai";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const isExpandedAtom = atom(false);

const useSideMenu = () => {
  const [isExpanded, setIsExpanded] = useAtom(isExpandedAtom);
  const toggleExpand = () => setIsExpanded((state) => !state);
  const className = isExpanded ? "expanded" : "contracted";
  const sideMenuButton = {
    true: <BsChevronCompactLeft size={20} />,
    false: <BsChevronCompactRight size={20} />,
  };
  const SideMenuButton = () => (
    <div onClick={toggleExpand} className="user-layout-side-menu-button">
      {sideMenuButton[isExpanded]}
    </div>
  );

  return { toggleExpand, SideMenuButton, className, isExpanded };
};

export default useSideMenu;
