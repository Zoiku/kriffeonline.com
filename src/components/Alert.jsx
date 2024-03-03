import MuiAlert from "@mui/material/Alert";
import MuiSnackbar from "@mui/material/Snackbar";
import useAlert from "../hooks/useAlert";

const Alert = () => {
  const { alert, handleCloseAlert } = useAlert();

  return (
    <MuiSnackbar
      open={alert.open}
      autoHideDuration={3000}
      onClose={handleCloseAlert}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
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
