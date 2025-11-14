import { createTheme } from '@mui/material/styles';

// Aya's Portfolio Theme
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF6B35',
      light: '#FF8C42',
      dark: '#C73E1D',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#8B1E3F',
      light: '#C73E1D',
      dark: '#5A1328',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#000000',
      paper: '#1A1A1A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#FFF9E6',
    },
    error: {
      main: '#C73E1D',
    },
    warning: {
      main: '#FFE44D',
    },
    info: {
      main: '#FF6B35',
    },
    success: {
      main: '#FF8C42',
    },
  },
  typography: {
    fontFamily: 'Inter, Montserrat, sans-serif',
    h1: {
      fontFamily: '"Bodoni Moda", "Playfair Display", serif',
      fontWeight: 700,
      fontSize: '4.5rem',
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
      '@media (max-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h2: {
      fontFamily: '"Bodoni Moda", "Playfair Display", serif',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: '"Bodoni Moda", "Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2.5rem',
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.75rem',
      },
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: 'Inter, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.7,
      letterSpacing: '0.01em',
    },
    body2: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '0.875rem',
      lineHeight: 1.6,
      letterSpacing: '0.01em',
    },
    button: {
      fontFamily: 'Montserrat, sans-serif',
      fontWeight: 600,
      fontSize: '0.875rem',
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
    },
    caption: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '0.75rem',
      lineHeight: 1.5,
      letterSpacing: '0.03em',
    },
    overline: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '0.75rem',
      fontWeight: 700,
      lineHeight: 2,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30,
          padding: '12px 32px',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0px 8px 24px rgba(255, 107, 53, 0.4)',
          },
        },
        contained: {
          background: 'linear-gradient(135deg, #FF6B35, #FF8C42)',
          color: '#FFFFFF',
          '&:hover': {
            background: 'linear-gradient(135deg, #FF8C42, #FFB347)',
          },
        },
        outlined: {
          borderColor: '#FF6B35',
          color: '#FF6B35',
          '&:hover': {
            borderColor: '#FF8C42',
            backgroundColor: 'rgba(255, 107, 53, 0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#1A1A1A',
          borderRadius: 12,
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0px 12px 32px rgba(255, 107, 53, 0.3)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 600,
          letterSpacing: '0.05em',
        },
        filled: {
          background: 'linear-gradient(135deg, #FF6B35, #FF8C42)',
          color: '#FFFFFF',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: '#000000',
          borderRadius: 16,
          border: '1px solid rgba(255, 107, 53, 0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(255, 255, 255, 0.2)',
            },
            '&:hover fieldset': {
              borderColor: '#FF6B35',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#FF8C42',
            },
          },
        },
      },
    },
  },
});

export default theme;
