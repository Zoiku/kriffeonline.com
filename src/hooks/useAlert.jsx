import { atom, useAtom } from "jotai";

const alertAtom = atom({
  open: null,
  message: null,
  severity: null,
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
  const handleOpenSuccessAlert = (message) => {
    setAlert({
      open: true,
      message,
      severity: "success",
    });
  };
  const handleOpenFailAlert = (message) => {
    setAlert({
      open: true,
      message,
      severity: "error",
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
