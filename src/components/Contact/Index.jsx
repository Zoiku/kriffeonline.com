export const ContactCard = ({ title, clickLabel, children }) => (
  <div className="contact-card">
    <div className="contact-card-header">{title}</div>
    <div className="contact-card-details">
      <p>{children}</p>
    </div>
    <div className="contact-card-footer">
      <div>{clickLabel}</div>
      <div></div>
    </div>
  </div>
);
