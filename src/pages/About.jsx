import "../styles/About.css";
import headerImage1 from "../assets/Overview/redguy.68e2bfe3b91f011f92d6.png";
import headerImage2 from "../assets/Overview/gree.50bd3a3e7657edd3d4e5.png";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-page-header">
        <div className="about-page-header-background-image">
          <img src={headerImage1} alt="" />
        </div>
        <div className="about-page-header-text-container"></div>
        <div className="about-page-header-background-image">
          <img src={headerImage2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
