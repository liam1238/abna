import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary'];
    darkSurface: Palette['primary'];
  }
  interface PaletteOptions {
    accent?: PaletteOptions['primary'];
    darkSurface?: PaletteOptions['primary'];
  }
}

const premiumCardBorder = '1px solid rgba(15, 23, 42, 0.08)';
const premiumCardShadow = '0 14px 40px rgba(15, 23, 42, 0.08)';
const premiumCardHoverShadow = '0 18px 48px rgba(15, 23, 42, 0.12)';

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#0F172A',
      dark: '#020617',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#D8C7A3',
      dark: '#B89B63',
      contrastText: '#0F172A',
    },
    accent: {
      main: '#C47A1A',
      dark: '#9A5A12',
      contrastText: '#FFFFFF',
    },
    darkSurface: {
      main: '#111827',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#16A34A',
      dark: '#15803D',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: 'Heebo, Arial, sans-serif',
    h1: {
      fontWeight: 800,
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 800,
      fontSize: '1.875rem',
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.35,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontWeight: 400,
      lineHeight: 1.6,
    },
    body2: {
      fontWeight: 400,
      lineHeight: 1.6,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
      letterSpacing: '-0.01em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 44,
          minWidth: 44,
          padding: '10px 20px',
          borderRadius: 12,
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          border: premiumCardBorder,
          boxShadow: premiumCardShadow,
          borderRadius: 16,
          transition: 'box-shadow 0.2s ease',
          '&:hover': {
            boxShadow: premiumCardHoverShadow,
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        outlined: {
          backgroundColor: '#FFFFFF',
          border: premiumCardBorder,
          boxShadow: premiumCardShadow,
          borderRadius: 16,
        },
        elevation1: {
          boxShadow: premiumCardShadow,
          borderRadius: 16,
        },
        elevation2: {
          boxShadow: premiumCardShadow,
          borderRadius: 16,
          border: premiumCardBorder,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        outlined: {
          borderColor: 'rgba(15, 23, 42, 0.14)',
        },
      },
    },
  },
});
