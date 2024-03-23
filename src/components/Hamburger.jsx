import "../styles/Hamburger.css";
import { stack as Menu } from "react-burger-menu";

const Hamburger = (props) => {
  const { bmBurgerBarsColor, ...rest } = props;

  return (
    <Menu
      styles={{
        bmBurgerBars: {
          background: bmBurgerBarsColor,
        },
      }}
      {...rest}
    />
  );
};

export default Hamburger;
