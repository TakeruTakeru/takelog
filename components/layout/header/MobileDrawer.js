import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import MobileMenuList from './MobileMenuList';
import Title from '~/components/common/Title';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '10px 10px 0px 10px',
    marginBottom: '0px',
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.secondary.contrastText,
  },
  logo: {
    flexGrow: '1',
    justifyContent: 'center',
    display: 'flex',
  },
  closeIcon: {
    position: 'absolute',
    left: 10,
    color: theme.palette.secondary.contrastText,
  },
}));

export default function MobileDrawer({
  title,
  isOpen,
  onClose,
  linkList,
  anchor = 'top',
}) {
  const { root, logo, closeIcon } = useStyles();
  return (
    <nav role="presentation">
      <Drawer anchor={anchor} open={isOpen} onClose={onClose}>
        <div className={root}>
          <IconButton
            edge="start"
            color="inherit"
            className={closeIcon}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
          <div className={logo}>
            <Title title={title} variant="h6" />
          </div>
          <MobileMenuList linkList={linkList} onClick={onClose} />
        </div>
      </Drawer>
    </nav>
  );
}

MobileDrawer.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  linkList: PropTypes.array.isRequired,
  anchor: PropTypes.string,
};
