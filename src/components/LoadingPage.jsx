import "../styles/LoadingPage.css";

const LoadingPage = ({ customMessage, customLoader }) => {
  return (
    <div className="loading-page">
      <div className="loading-component">
        <div className="loading-icon">
          {customLoader ?? <div>Loading Spinner Goes Here</div>}
        </div>
        <div className="loading-message">
          {customMessage ?? <div>Please wait...</div>}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
