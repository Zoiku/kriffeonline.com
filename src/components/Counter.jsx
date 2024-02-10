import "../styles/Counter.css";

const Counter = ({ count, handleDecrease, handleIncrease }) => {
  return (
    <div className="counter">
      <div className="count-inner">
        <div onClick={handleDecrease} className="counter-btn">
          <span>-</span>
        </div>
        <div className="counter-value">
          <input className="counter-input" type="text" value={count} />
        </div>
        <div onClick={handleIncrease} className="counter-btn">
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
