import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";


export const BlueTheme = createTheme({
  palette: {
    primary: {
      main: blue[500]
    },
    secondary: {
      main: blue[100]
    },
    error: {
      main: red[500]
    }
  }
})

