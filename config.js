import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

export const LINK_CONFIG = [
    { title: 'Home', href: '/v1/home' },
    { title: 'Profile', href: '/v1/profile' },
    { title: 'Blog', href: '/v1/blog' }
  ];

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});