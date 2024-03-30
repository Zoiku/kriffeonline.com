import "../styles/LoadingPage.css";
import { PulseLoader as Spinner } from "react-spinners";

const LoadingPage = ({ customMessage, customLoader }) => {
  return (
    <div className="loading-page">
      <div className="loading-component">
        <div className="loading-icon">
          {customLoader ?? (
            <div>
              <Spinner />
            </div>
          )}
        </div>
        {customMessage && (
          <div className="loading-message">{customMessage}</div>
        )}
      </div>
    </div>
  );
};

export default LoadingPage;
