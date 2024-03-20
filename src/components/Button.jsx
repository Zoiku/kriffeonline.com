import { LoadingButton } from "@mui/lab";

const Button = (props) => {
  const { label, ...rest } = props;

  return (
    <LoadingButton
      {...rest}
      variant="outlined"
      disableElevation
      color="primary"
    >
      <span>{label}</span>
    </LoadingButton>
  );
};

export default Button;
