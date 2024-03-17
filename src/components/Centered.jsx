import "../styles/Centered.css";

const Centered = ({ children, className, mobileWithPadding, style }) => {
  return (
    <div style={style} className={`centered-section ${className}-wrapper`}>
      <div
        className={`centered-section-inner ${
          mobileWithPadding && "centered-section-inner-with-padding"
        } ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Centered;
