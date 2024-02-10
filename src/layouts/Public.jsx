import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Public = () => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default Public;
