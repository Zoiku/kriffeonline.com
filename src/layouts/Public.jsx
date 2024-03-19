import "../styles/Public.Layout.css";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Public = () => {
  return (
    <div className="public-layout" id="outer-container">
      <Nav />
      <main className="app-main-layout" id="page-wrap">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default Public;
