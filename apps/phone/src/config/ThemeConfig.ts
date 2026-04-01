import { ThemeOptions } from '@mui/material';

// Configure all of the phone's default themes here.
export const PhoneThemes: Record<string, ThemeOptions> = {
  'taso-dark': {
    shape: {
      borderRadius: 0,
    },
    typography: {
      fontFamily: "'Geist Variable', 'Segoe UI', 'Roboto', sans-serif",
      h4: {
        fontWeight: 700,
      },
      h5: {
        fontWeight: 700,
      },
      button: {
        fontWeight: 600,
        letterSpacing: 0.4,
        textTransform: 'none',
      },
    },
    components: {
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: '#2c3445',
          },
        },
      },
    },
    palette: {
      mode: 'dark',
      background: {
        default: '#0f1116',
        paper: '#1a1e28',
      },
      primary: {
        main: '#00a2ed',
      },
      secondary: {
        main: '#0093d9',
      },
      text: {
        primary: '#f5f7fa',
        secondary: '#a7b0c2',
        disabled: '#6d778a',
      },
    },
  },
  'default-light': {
    shape: {
      borderRadius: 0,
    },
    typography: {
      fontFamily: "'Geist Variable', 'Segoe UI', 'Roboto', sans-serif",
    },
    palette: {
      mode: 'light',
      primary: {
        main: '#607D8B',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.9)',
        secondary: 'rgba(20, 20, 20, 0.9)',
        disabled: 'rgba(20, 20, 20, 0.5)',
      },
    },
  },
};
