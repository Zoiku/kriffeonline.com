import EastIcon from '@mui/icons-material/East';

export const ContactCard = ({ title, clickLabel, children, onClick }) => (
  <div className="contact-card">
    <div className="contact-card-head">
      <div className="contact-card-title">{title}</div>
      <div className="contact-card-helper">{children}</div>
    </div>
    <div onClick={onClick} className="contact-card-content">
      <span>{clickLabel}</span>
      <span>
        <EastIcon fontSize="inherit" />
      </span>
    </div>
  </div>
);
