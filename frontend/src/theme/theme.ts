// Material UI
import { Theme, PaletteMode, responsiveFontSizes } from '@mui/material';
import { createTheme, ComponentsOverrides } from '@mui/material/styles';

const getTheme = (): Theme =>
  responsiveFontSizes(
    createTheme({
      palette: {
        mode: 'dark' as PaletteMode,
        background: {
          default: 'rgb(10, 20, 10)',
          paper: 'rgb(15, 30, 15)',
        },
        text: {
          primary: 'rgb(240, 255, 240)',
          secondary: 'rgb(200, 220, 200)',
        },
        primary: {
          main: 'rgb(76, 175, 80)',
          light: 'rgb(129, 199, 132)',
          dark: 'rgb(56, 142, 60)',
          contrastText: 'rgb(255, 255, 255)',
        },
        secondary: {
          main: 'rgb(46, 125, 50)',
          light: 'rgb(102, 187, 106)',
          dark: 'rgb(27, 94, 32)',
          contrastText: 'rgb(255, 255, 255)',
        },
        divider: 'rgba(76, 175, 80, 0.24)',
      },
      typography: {
        fontFamily: 'Yekan, sans-serif',
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 600,
              borderRadius: 0,
              paddingTop: 10,
              paddingBottom: 10,
            },
          } as ComponentsOverrides['MuiButton'],
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 0,
            },
          } as ComponentsOverrides['MuiInputBase'],
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 0,
            },
            input: {
              borderRadius: 0,
            },
          } as ComponentsOverrides['MuiOutlinedInput'],
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 0,
            },
          } as ComponentsOverrides['MuiCard'],
        },
      },
    })
  );

export default getTheme;
