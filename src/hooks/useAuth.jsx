import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../services/axios";
import { useQueryClient } from "react-query";

const authStateAtom = atomWithStorage(
  "kriffe_auth",
  localStorage.getItem("kriffe_auth")
    ? JSON.parse(localStorage.getItem("kriffe_auth"))
    : {}
);

const useAuth = () => {
  const queryClient = useQueryClient();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const redirectTo = urlParams.get("redirect_to") ?? null;
  const navigate = useNavigate();
  const [authState, setAuthState] = useAtom(authStateAtom);
  const isLogged = useMemo(() => {
    if (authState) {
      return Object.keys(authState).includes("user");
    } else {
      return false;
    }
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

      // refetch the products to included current user favorites
      queryClient.invalidateQueries(["products"]);

      if (redirectTo) {
        navigate(redirectTo);
      } else {
        navigate("/");
      }
    } catch (error) {
      setAuthState(null);
      localStorage.removeItem("kriffe_auth");
    }
  };

  const signOut = () => {
    setAuthState(null);
    localStorage.removeItem("kriffe_auth");
    // refetch the products to included current user favorites
    queryClient.invalidateQueries(["products"]);
    navigate("/signin");
  };

  return { isLogged, getUser, signIn, signOut };
};

export default useAuth;
