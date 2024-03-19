import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const tokenAtom = atomWithStorage("token", localStorage.getItem("token"));

const useAuth = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const redirectTo = urlParams.get("redirect_to") ?? null;
  const navigate = useNavigate();
  const [token, setToken] = useAtom(tokenAtom);
  const isLogged = useMemo(() => {
    return token !== null;
  }, [token]);
  const signIn = (authToken) => {
    setToken(authToken);
    if (redirectTo) {
      navigate(redirectTo);
    } else {
      navigate("/");
    }
  };
  const signOut = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return { token, isLogged, signIn, signOut };
};

export default useAuth;
