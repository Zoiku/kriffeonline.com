import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const tokenAtom = atomWithStorage("token", localStorage.getItem("token"));

const useAuth = () => {
  const [token, setToken] = useAtom(tokenAtom);
  const isLogged = token === null ? false : true;
  const signIn = (authToken) => {
    setToken(authToken);
  };
  const signOut = () => {
    setToken(null);
  };
  return { token, isLogged, signIn, signOut };
};

export default useAuth;
