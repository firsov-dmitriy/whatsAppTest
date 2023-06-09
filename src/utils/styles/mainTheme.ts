import { createTheme } from '@mui/material';

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: '#455d58',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: '#00a884',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          minHeight: '0 !important',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          backgroundColor: '#d1d7db',
          margin: '0',
          paddingLeft: '20px',
        },
      },
    },
  },
});
