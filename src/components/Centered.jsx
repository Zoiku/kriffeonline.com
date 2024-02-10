import "../styles/Centered.css";

const Centered = ({ children, className, style }) => {
  return (
    <div style={style} className={`centered-section ${className}-wrapper`}>
      <div className={`centered-section-inner ${className}`}>{children}</div>
    </div>
  );
};

export default Centered;
