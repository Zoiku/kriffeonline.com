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
      {label}
    </LoadingButton>
  );
};

export default Button;
