export const ContactCard = ({ icon, title, value }) => (
  <div className="contact-card">
    <div className="contact-card-icon">
      <img src={icon} alt="" />
    </div>
    <div className="contact-card-details">
      <div className="contact-card-details-title">{title}</div>
      <div>{value}</div>
    </div>
  </div>
);
