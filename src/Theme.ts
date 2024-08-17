import { CssVarsThemeOptions, extendTheme } from '@mui/joy';

export const theme = extendTheme({
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#666',
    },
  },
} as CssVarsThemeOptions);
