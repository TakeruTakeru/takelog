import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Title from '~/components/common/Title';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {},
  siteTitle: {
    flex: 'auto',
    textAlign: 'center',
  },
  menuButton: {
    display: 'block',
    position: 'absolute',
    left: 10,
  },
};
// for parent components, I need to implement this as a class
class Bar extends React.Component {
  render() {
    const { title, onClickMenuIcon, classes } = this.props;
    const { root, siteTitle, menuButton } = classes;
    return (
      <React.Fragment>
        <AppBar>
          {/* Toolbar makes children to flex element. */}
          <Toolbar className={root}>
            <IconButton
              className={menuButton}
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={onClickMenuIcon}
            >
              <MenuIcon />
            </IconButton>
            <div className={siteTitle}>
              <Title title={title} variant="h5" />
            </div>
          </Toolbar>
        </AppBar>
        {/* Toolbar possessing header's height dynamicaly.  */}
        <Toolbar />
      </React.Fragment>
    );
  }
}

Bar.propTypes = {
  title: PropTypes.string.isRequired,
  onClickMenuIcon: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bar);
