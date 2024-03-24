export const ProvidedService = ({ providedService }) => (
  <div className="provided-service">
    <div className="provided-service-image"></div>
    <div className="provided-service-content">
      <div className="provided-service-title">{providedService.title}</div>
      <div className="provided-service-body">{providedService.content}</div>
    </div>
  </div>
);
