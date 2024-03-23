export const ProvidedService = ({ providedService }) => (
  <div className="provided-service">
    <div className="provided-service-title">{providedService.title}</div>

    <div className="provided-service-overlay">
      <div className="provided-service-overlay-title">{providedService.title}</div>
      <div className="provided-service-content">{providedService.content}</div>
    </div>
  </div>
);