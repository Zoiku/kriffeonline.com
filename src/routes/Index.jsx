import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/Public";
import HomePage from "../pages/Home";
import AboutPage from "../pages/About";
import ContactPage from "../pages/Contact";
import MarketplacePage from "../pages/Marketplace";
import ProductDetailsPage from "../pages/ProductDetails";
import EventsPage from "../pages/Events";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import CheckoutPage from "../pages/Checkout";
import EventDetailsPage from "../pages/EventDetails";
import SettingsPage from "../pages/Settings";
import NotFoundPage from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
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
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
