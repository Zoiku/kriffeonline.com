const StyledCurrency = ({ currency, amount }) => {
  return (
    <div>
      <div style={{ color: "gray", fontSize: "smaller" }}>{currency}</div>
      <div style={{ fontSize: "xx-large" }}>
        <strong>{amount}</strong>
      </div>
    </div>
  );
};

export default StyledCurrency;
