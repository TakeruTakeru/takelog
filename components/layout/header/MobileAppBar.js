import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';

// for parent components, I need to implement this as a class
export default class Bar extends React.Component {
  render() {
    const { title, onClickMenuIcon } = this.props;
    return (
      <AppBar>
        <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={onClickMenuIcon}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

Bar.propTypes = {
  title: PropTypes.string,
  onClickMenuIcon: PropTypes.func
};
