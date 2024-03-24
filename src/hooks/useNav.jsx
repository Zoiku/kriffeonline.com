import { useLocation } from "react-router-dom";
import { styles } from "../components/Nav/Index";
import useAuth from "./useAuth";
import useMenu from "./useMenu";
import { navLinks } from "../utils/nav";

const useNav = () => {
  const location = useLocation();
  const style = styles[location?.pathname];
  const { isLogged, signOut, getUser } = useAuth();
  const accountIconMenu = useMenu();

  return {
    style,
    isLogged,
    signOut,
    getUser,
    accountIconMenu,
    navLinks,
  };
};

export default useNav;
