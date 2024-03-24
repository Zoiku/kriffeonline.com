import "../styles/NotFound.css";
import CenteredSection from "../components/Centered";
import imageSrc from "../assets/Svgs/Oops! 404 Error with a broken robot-rafiki.svg";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page">
      <CenteredSection className={"not-found-page-inner"} mobileWithPadding>
        <div className="not-found-image">
          <img src={imageSrc} alt="" />
        </div>
        <center>
          <Button
            color={"secondary"}
            startIcon={<KeyboardBackspaceIcon fontSize="inherit" />}
            onClick={() => navigate("/")}
            label={"Retun home"}
          />
        </center>
      </CenteredSection>
    </div>
  );
};

export default NotFound;
