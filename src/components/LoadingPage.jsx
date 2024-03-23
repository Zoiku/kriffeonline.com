import "../styles/LoadingPage.css";
import { SyncLoader as Spinner } from "react-spinners";

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
        <div className="loading-message">
          {customMessage ?? <div>Please wait...</div>}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
