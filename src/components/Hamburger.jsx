import "../styles/Hamburger.css";
import { push as Menu } from "react-burger-menu";
import useHamburger from "../hooks/useHamburger";

const Hamburger = (props) => {
  const { isOpen } = useHamburger();
  return (
    <Menu width={"90%"} {...props} isOpen={isOpen} pageWrapId={"page-wrap"} />
  );
};

export default Hamburger;
