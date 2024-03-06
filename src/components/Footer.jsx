import "../styles/Footer.css";
import CenteredSection from "../components/Centered";
import logo from "../assets/logo-light.png";
import { NavLink } from "react-router-dom";

const FooterLinksSection = ({ title, children }) => (
  <div className="footer-company-links-section">
    <div className="footer-company-links-section-title">{title}</div>
    <ul className="footer-company-links-section-list">{children}</ul>
  </div>
);

const FooterLink = ({ label, to, onClick }) => (
  <li>
    {to && (
      <NavLink className={"footer-link"} to={to}>
        {label}
      </NavLink>
    )}
    {onClick && <span className="footer-link">{label}</span>}
  </li>
);

const Footer = () => {
  return (
    <div className="footer-component">
      <CenteredSection className={"footer-header"}>
        <div className="footer-inner">
          <div className="footer-company-profile">
            <div className="footer-company-logo">
              <img src={logo} alt="" />
            </div>
            <div>Empowering the Christian Community</div>
          </div>
          <div className="footer-company-links-sections">
            <FooterLinksSection title={"Company"}>
              <FooterLink to={"/about"} label={"About Us"} />
            </FooterLinksSection>
            <FooterLinksSection title={"Resources"}>
              <FooterLink to={"/marketplace"} label={"Marketplace"} />
              <FooterLink to={"/events"} label={"Events"} />
              <FooterLink to={"/signup"} label={"Register"} />
            </FooterLinksSection>
            <FooterLinksSection title={"Contact Us"}>
              <FooterLink onClick={() => {}} label={"info@kriffeoline.com"} />
              <FooterLink onClick={() => {}} label={"+233 24 000 000 00"} />
              <FooterLink onClick={() => {}} label={"1 Lantei Avenue"} />
            </FooterLinksSection>
            <FooterLinksSection title={"Help Center"}>
              <FooterLink to={"/contact"} label={"Faqs"} />
            </FooterLinksSection>
          </div>
        </div>
        <div></div>
      </CenteredSection>
      <CenteredSection className={"footer-footer"}>
        <div>© 2023 KriffeOnline LTD™. All Rights Reserved.</div>
      </CenteredSection>
    </div>
  );
};

export default Footer;
