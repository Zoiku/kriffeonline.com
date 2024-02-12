import MuiAlert from "@mui/material/Alert";
import MuiSnackbar from "@mui/material/Snackbar";
import useAlert from "../hooks/useAlert";

const Alert = () => {
  const { alert, handleCloseAlert } = useAlert();

  return (
    <MuiSnackbar
      open={alert.open}
      autoHideDuration={5000}
      onClose={handleCloseAlert}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <MuiAlert
        variant={"standard"}
        onClose={handleCloseAlert}
        severity={alert.severity}
        action={[]}
      >
        {alert.message}
      </MuiAlert>
    </MuiSnackbar>
  );
};

export default Alert;
