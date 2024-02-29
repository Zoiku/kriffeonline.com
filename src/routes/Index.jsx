import { useLocation } from "react-router-dom";
import useAnimations from "../hooks/useAnimation";
import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/Public";
import UserLayout from "../layouts/User";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import MarketplacePage from "../pages/Marketplace";
import ProductDetailsPage from "../pages/ProductDetails";
import EventsPage from "../pages/Events";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import CartPage from "../pages/Cart";
import FavoritesPage from "../pages/Favorites";
import CheckoutPage from "../pages/Checkout";
import EventDetailsPage from "../pages/EventDetails";
import AuthProtectedRoutes from "./AuthProtected";
import UserDashboardPage from "../pages/user/Dashboard";
import Test from "../pages/Test";

const AppRoutes = () => {
  const location = useLocation();
  const { animated, pageTransitions } = useAnimations();

  return pageTransitions(location.pathname)((style, key) => (
    <animated.div style={style}>
      <Routes location={key}>
        <Route path="signin" element={<SignInPage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route
            path="/marketplace/:productNo"
            element={<ProductDetailsPage />}
          />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:eventNo" element={<EventDetailsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
        <Route element={<AuthProtectedRoutes />}>
          <Route element={<UserLayout />}>
            <Route path="/user/dashboard" element={<UserDashboardPage />} />
          </Route>
        </Route>

        <Route path="/test" element={<Test />} />
      </Routes>
    </animated.div>
  ));
};

export default AppRoutes;
