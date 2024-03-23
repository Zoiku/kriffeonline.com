import { LoadingButton } from "@mui/lab";

const Button = (props) => {
  const { label, ...rest } = props;

  return (
    <LoadingButton {...rest} variant="contained" disableElevation>
      <span>{label}</span>
    </LoadingButton>
  );
};

export default Button;
