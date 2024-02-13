import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const tokenAtom = atomWithStorage("token", localStorage.getItem("token"));

const useAuth = () => {
  const navigate = useNavigate();
  const [token, setToken] = useAtom(tokenAtom);
  const isLogged = useMemo(() => {
    return token !== null;
  }, [token]);
  const signIn = (authToken) => {
    setToken(authToken);
    navigate("/");
  };
  const signOut = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  return { token, isLogged, signIn, signOut };
};

export default useAuth;
