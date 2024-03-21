import MuiAlert from "@mui/material/Alert";
import MuiSnackbar from "@mui/material/Snackbar";
import useAlert from "../hooks/useAlert";

const Alert = () => {
  const { alert, handleCloseAlert } = useAlert();

  return (
    <MuiSnackbar
      open={alert.open}
      autoHideDuration={alert.duration}
      onClose={handleCloseAlert}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <MuiAlert
        variant={"standard"}
        onClose={handleCloseAlert}
        severity={alert.severity}
        sx={{ fontWeight: 600 }}
      >
        {alert.message}
      </MuiAlert>
    </MuiSnackbar>
  );
};

export default Alert;
