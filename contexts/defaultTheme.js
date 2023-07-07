import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#4f8b9b',
    },
    secondary: {
      main: '#5E6DAA',
    },
    error: {
      main: '#f44336',
    },
    sixth: {
      // light: value,
      main: "#D9D9D9",
      // dark: value,
    },
    seventh: {
      // light: value,
      main: "#FFE599",
      // dark: value,
    },
    eighth: {
      // light: value,
      main: "#B7D7A8",
      // dark: value,
    },
    hsfund: {
      // light: value,
      main: "#A4C2F4",
      // dark: value,
    },
    hsadv: {
      // light: value,
      main: "#B4A7D6",
      // dark: value,
    },
    hspro: {
      // light: value,
      main: "#EA9999",
      // dark: value,
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: 'Raleway',
    h1: {
      fontFamily: 'Josefin Sans',
    },
    h2: {
      fontFamily: 'Josefin Sans',
    },
    h3: {
      fontFamily: 'Josefin Sans',
    },
    h4: {
      fontFamily: 'Josefin Sans',
    },
    h5: {
      fontFamily: 'Josefin Sans',
    },
    h6: {
      fontFamily: 'Josefin Sans',
    },
  },
});

export default theme
