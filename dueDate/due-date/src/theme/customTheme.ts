import { createTheme, ThemeOptions } from '@mui/material';

export const customTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#ebeae6',
      main: '#cda256',
      dark: '#232b2f',
    },
    background: {
      paper: '#4F4332',
      default: '#232B2F',
    },
  },
});
