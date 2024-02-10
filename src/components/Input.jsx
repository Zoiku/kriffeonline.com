import "../styles/Input.css";
import { TextField } from "@mui/material";

const Input = (props) => {
  const { label, ...rest } = props;

  return (
    <div className="input-textfield">
      <label htmlFor={label}>
        <small>{label}</small>
      </label>
      <div>
        <TextField id={label} {...rest} fullWidth size="small" />
      </div>
    </div>
  );
};

export default Input;
