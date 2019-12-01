import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import HideWhenScrolling from '~/components/actions/HideWhenScrolling';
import AppBar from './MobileAppBar';
import Drawer from './MobileDrawer';

export default function Layout({ id, title, linkList }) {
  const [state, setState] = React.useState({
    menuDrawer: false,
  });

  const onClickMenuIcon = event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, menuDrawer: true });
  };

  const onCloseDrawer = event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, menuDrawer: false });
  };

  return (
    <div id={id}>
      <CssBaseline />
      <HideWhenScrolling>
        <AppBar onClickMenuIcon={onClickMenuIcon} title={title} />
      </HideWhenScrolling>
      <Drawer
        onClose={onCloseDrawer}
        anchor="top"
        isOpen={state.menuDrawer}
        linkList={linkList}
      />
    </div>
  );
}

Layout.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  linkList: PropTypes.array.isRequired,
};
