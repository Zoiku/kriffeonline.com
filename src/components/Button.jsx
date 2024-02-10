import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material";
import styleButton from "../styles/Buttons";

const Button = (props) => {
  const { label, theme, ...rest } = props;
  const { onRest, onHover } = styleButton(theme);
  const MuiButton = styled(LoadingButton)({
    textTransform: "none",
    ...onRest,
    fontFamily: [].join(","),
    "&:hover": {
      ...onHover,
    },
  });

  return (
    <MuiButton {...rest} disableElevation variant="text">
      {label}
    </MuiButton>
  );
};

export default Button;
