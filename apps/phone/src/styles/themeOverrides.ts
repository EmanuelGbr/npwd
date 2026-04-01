// Some remnants of the migration to Material UI v5
import { ThemeOptions } from '@mui/material';

const themeOverrides: ThemeOptions = {
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          borderRadius: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'unset',
          border: '1px solid #2c3445',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          borderBottom: '1px solid #2c3445',
          '&.Mui-selected': {
            backgroundColor: 'rgba(0, 162, 237, 0.18)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '1px solid #2c3445',
          boxShadow: 'none',
        },
      },
    },
  },
};

export default themeOverrides;
