import { LoadingButton } from "@mui/lab";
import { styled } from "@mui/material";
import styleButton from "../styles/Buttons";

const Button = (props) => {
  const { label, theme, ...rest } = props;
  const { onRest, onHover } = styleButton(theme);
  const MuiButton = styled(LoadingButton)({
    textTransform: "none",
    borderRadius: 0,
    ...onRest,
    fontFamily: [].join(","),
    "&:hover": {
      ...onHover,
    },
  });

  return (
    <MuiButton {...rest} disableElevation variant="contained">
      {label}
    </MuiButton>
  );
};

export default Button;
