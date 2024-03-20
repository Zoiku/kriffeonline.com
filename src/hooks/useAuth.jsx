import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/axios";

const authStateAtom = atomWithStorage(
  "authState",
  localStorage.getItem("authState")
    ? JSON.parse(localStorage.getItem("authState"))
    : {}
);

const useAuth = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const redirectTo = urlParams.get("redirect_to") ?? null;
  const navigate = useNavigate();
  const [authState, setAuthState] = useAtom(authStateAtom);
  const isLogged = useMemo(() => {
    return Object.keys(authState).includes("user");
  }, [authState]);

  const getUser = () => {
    if (isLogged) {
      return authState.user;
    } else {
      return null;
    }
  };

  const signIn = async (authToken) => {
    setAuthState({ token: authToken });
    try {
      const { userdetails } = await (
        await axios.get("/get_current_user_info")
      ).data;
      setAuthState((previousAuthState) => {
        return {
          ...previousAuthState,
          user: userdetails,
        };
      });
      if (redirectTo) {
        navigate(redirectTo);
      } else {
        navigate("/");
      }
    } catch (error) {
      setAuthState({});
    }
  };

  const signOut = () => {
    setAuthState(null);
    localStorage.removeItem("authState");
    navigate("/signin");
  };

  return { authState, isLogged, getUser, signIn, signOut };
};

export default useAuth;
