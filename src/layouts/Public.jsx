import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Public = () => {
  return (
    <div id="outer-container">
      <Nav />
      <main id="page-wrap">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Public;
