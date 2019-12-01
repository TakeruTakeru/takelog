import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const LINK_CONFIG = [
    { title: 'Home', href: '/v1/home' },
    { title: 'Profile', href: '/v1/profile' },
    { title: 'Blog', href: '/v1/blog' }
  ];

export const TITLE = 'TakeLog';

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#11cb5f',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});