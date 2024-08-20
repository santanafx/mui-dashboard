import { Components, CssVarsThemeOptions, extendTheme, Theme } from '@mui/joy';

export const dividerColors = '#333';

export const theme = extendTheme({
  palette: {
    primary: {
      main: '#333',
    },
    secondary: {
      main: '#666',
    },
  },
  components: {
    JoyList: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
        },
      },
    },
    JoyListItem: {
      styleOverrides: {
        root: {
          border: 'none',
        },
        startAction: {},
        endAction: {},
      },
    },
    JoyDivider: {
      styleOverrides: {
        root: {
          '--Divider-thickness': '1px',
          '--Divider-lineColor': dividerColors,
        },
      },
    },
  } as Components<Theme>,
} as CssVarsThemeOptions);
