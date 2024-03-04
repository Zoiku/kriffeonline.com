import "../styles/About.css";
import CenteredSection from "../components/Centered";
import image from "../assets/Placeholder/image1.png";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-page-header">
        <CenteredSection className={"about-us-intro"}>
          <div className="about-us-intro-head">
            <p className="about-us-intro-title">
              Our journey began with a simple yet profound realization:{" "}
              <span className="highlight">
                the Ghanaian Christian community lacks a dedicated platform that
                could meet its unique needs.
              </span>
            </p>
          </div>
          <p className="about-us-intro-title-helper">
            Inspired by this gap, we embarked on a mission to pioneer a
            transformative e-commerce platform that would seamlessly integrate
            Christian product offerings and event ticketing. Our story is one of
            purpose, driven by faith, and anchored in the desire to provide
            believers with a secure and enriching environment to access
            faith-based resources and events.
          </p>
        </CenteredSection>
        <div className="about-intro-background">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
