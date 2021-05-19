import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  //   palette: {},
  typography: {
    useNextVariants: true,
    fontSize: 11,
    fontFamily: ['Montserrat', 'sans-serif', 'Helvetica Neue', 'Arial'].join(
      ','
    ),
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  overrides: {
    MuiInputBase: {
      root: {
        backgroundColor: '#e8eaf6',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiBadge: {
      anchorOriginTopRightCircle: {
        backgroundColor: '#4caf50',
      },
    },
  },
  topBar: {
    height: '56px',
  },
});

export default theme;
