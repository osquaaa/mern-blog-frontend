import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme();

export const theme = createTheme({
  shadows: defaultTheme.shadows, // берём все 25 дефолтных
  palette: {
    primary: {
      main: "#4361ee",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
});
