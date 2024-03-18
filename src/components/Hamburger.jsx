import "../styles/Hamburger.css";
import { push as Menu } from "react-burger-menu";
import useHamburger from "../hooks/useHamburger";

const Hamburger = () => {
  const { isOpen } = useHamburger();

  return <Menu width={"90%"} isOpen={isOpen} pageWrapId={"page-wrap"}></Menu>;
};

export default Hamburger;
