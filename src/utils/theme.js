import { createTheme } from "@mui/material/";

export const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#007aa2",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ac7447",
      contrastText: "#fff",
    },
    common: {
      main: "#000",
      contrastText: "#fff",
    },
  },
});
