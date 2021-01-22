import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    }
  }
});
