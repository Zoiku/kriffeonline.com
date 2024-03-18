import "../styles/About.css";
import CenteredSection from "../components/Centered";
import ReadMore from "../components/ReadMore";
import { providedServices } from "../utils/about";
import { ProvidedService } from "../components/About/Index";
import useScreen from "../hooks/useScreen";

const AboutSectionStyled = ({ title, titleHelper, children }) => (
  <div className="about-page-section-styled">
    <div className="about-page-section-styled-content">
      <div className="about-page-section-styled-content-inner">
        <div className="about-page-section-head">
          <div className="about-page-section-title-helper">{titleHelper}</div>
          <div className="about-page-section-title">{title}</div>
        </div>
        <div className="about-page-section-content">{children}</div>
      </div>
    </div>
    <div className="about-page-section-styled-image"></div>
  </div>
);

const AboutSection = ({ children, title, titleHelper }) => (
  <div className="about-page-section">
    <div className="about-page-section-head">
      <div className="about-page-section-title-helper">{titleHelper}</div>
      <div className="about-page-section-title">{title}</div>
    </div>
    <div className="about-page-section-content">{children}</div>
  </div>
);

const HomeAboutItem = ({ children, heading, index }) => (
  <div className="home-page-about-item">
    <div className="home-page-about-item-index">
      <span>0{index}.</span>
    </div>
    <div className="home-page-about-item-inner">
      <div className="home-page-about-item-heading">{heading}</div>
      <div className="home-page-about-item-body">{children}</div>
    </div>
  </div>
);

const About = () => {
  const { isDesktop } = useScreen();

  return (
    <div className="about-page">
      <div className="about-page-sections">
        <AboutSection title={"Defining Who We Are"} titleHelper={"Our History"}>
          <div className="about-us-who-are-we-container">
            <div className="about-us-who-are-we">
              <p>
                Our journey began with a simple yet profound realization: the
                Ghanaian Christian community lacked a dedicated platform that
                could meet its unique needs. Inspired by this gap, we embarked
                on a mission to pioneer a transformative e-commerce platform
                that would seamlessly integrate Christian product offerings and
                event ticketing. Our story is one of purpose, driven by faith,
                and anchored in the desire to provide believers with a secure
                and enriching environment to access faith-based resources and
                events.
              </p>
            </div>
          </div>
        </AboutSection>

        <CenteredSection className={"about-page-section-styled-container"}>
          <AboutSectionStyled
            title={"Defining Our Purpose"}
            titleHelper={"Our Mission"}
          >
            <div className="about-page-section-mission-content">
              <p>
                We aim to establish a centralized marketplace for Christian
                products and event ticketing. By curating a diverse selection of
                faith-inspired offerings, we empower believers to access
                resources that align with their values and beliefs
              </p>
              <p>
                KRIFFEonline is designed to cater specifically to the unique
                needs of the Ghanaian Christian community. We understand the
                importance of faith in daily life and seek to foster connections
                and spiritual growth among believers through our platform.
              </p>
            </div>
          </AboutSectionStyled>
        </CenteredSection>

        <AboutSection
          title={"Pioneering Our Path to Success"}
          titleHelper={"Forward Thinking Vision"}
        >
          <CenteredSection className="home-page-about-items">
            <HomeAboutItem index={1} heading={"Bridging the Gap"}>
              We are filling a vital gap in the market by providing a dedicated
              platform for Christian products and events in Ghana.
            </HomeAboutItem>
            <HomeAboutItem index={2} heading={"Digital Transformation"}>
              {isDesktop ? (
                <ReadMore
                  maxLength={110}
                  text={
                    "With the increasing penetration of the internet and growing digital adoption, we envision a digital transformation of the way Ghanaian Christians access faith-based resources and engage with events"
                  }
                />
              ) : (
                "With the increasing penetration of the internet and growing digital adoption, we envision a digital transformation of the way Ghanaian Christians access faith-based resources and engage with events"
              )}
            </HomeAboutItem>
            <HomeAboutItem index={3} heading={"Convenience and Connection"}>
              {isDesktop ? (
                <ReadMore
                  maxLength={100}
                  text={
                    "Our vision is to offer a convenient and accessible platform that provides believers with the resources they need and the connections they seek. We aim to be the bridge that brings faith communities closer, allowing them to thrive and grow in their spiritual journeys."
                  }
                />
              ) : (
                "Our vision is to offer a convenient and accessible platform that provides believers with the resources they need and the connections they seek. We aim to be the bridge that brings faith communities closer, allowing them to thrive and grow in their spiritual journeys."
              )}
            </HomeAboutItem>
          </CenteredSection>
        </AboutSection>

        <AboutSection
          title={"Explore Our Range of Services"}
          titleHelper={"Our Services"}
        >
          <CenteredSection className={"provided-services"}>
            {providedServices.map((providedService, index) => (
              <ProvidedService key={index} providedService={providedService} />
            ))}
          </CenteredSection>
        </AboutSection>
      </div>
    </div>
  );
};

export default About;
