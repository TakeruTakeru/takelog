import { createMuiTheme } from '@material-ui/core/styles';

// you can redefine themes by this tools.
// color tool: https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=212121&secondary.color=00C853&primary.text.color=F5F5F5&secondary.text.color=FAFAFA
// export to material-ui tool: https://react-theming.github.io/create-mui-theme/

const palette = {
  primary: { main: '#212121', contrastText: '#F5F5F5' },
  secondary: { main: '#00C853', contrastText: '#FAFAFA' },
};

const typography = {
  body1: {
    fontFamily: '"SawarabiGothic"'
  },
  body2: {
    fontFamily: '"SawarabiGothic"'
  },
  subtitle1: {
    fontFamily: '"SawarabiGothic"',
    weight: 700,
  },
  subtitle2: {
    fontFamily: '"SawarabiGothic"'
  },
  h5: {
    fontFamily: '"Press Start 2P", "cursive", "Comic Sans MS"',
    letterSpacing: 2,
  },
  h6: {
    fontFamily: 'Comic Sans MS',
    letterSpacing: 2,
  },
};

const themeName = 'Mine Shaft Malachite Ducks';

export default createMuiTheme({ palette, typography, themeName });
