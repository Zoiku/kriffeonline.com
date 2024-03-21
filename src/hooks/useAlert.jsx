import { atom, useAtom } from "jotai";

const alertAtom = atom({
  open: null,
  message: null,
  severity: null,
  duration: null,
});

const useAlert = () => {
  const [alert, setAlert] = useAtom(alertAtom);
  const handleCloseAlert = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert({
      ...alert,
      open: false,
    });
  };
  const handleOpenSuccessAlert = ({ message, duration = 7000 }) => {
    setAlert({
      ...alert,
      open: true,
      message,
      severity: "success",
      duration,
    });
  };
  const handleOpenFailAlert = ({ message, duration = 7000 }) => {
    setAlert({
      ...alert,
      open: true,
      message,
      severity: "error",
      duration,
    });
  };
  return {
    alert,
    handleCloseAlert,
    handleOpenSuccessAlert,
    handleOpenFailAlert,
  };
};

export default useAlert;
