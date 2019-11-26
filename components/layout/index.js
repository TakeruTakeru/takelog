import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import HideWhenScrolling from '~/components/actions/HideWhenScrolling';
import ScrollToTop from '~/components/actions/ScrollToTop';
import AppBar from './header/MobileAppBar';
import Drawer from './header/MobileDrawer';
import { LINK_CONFIG } from '~/config';

export default function Layout({ children }) {
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
    <div id="top">
      <React.Fragment>
        <CssBaseline />
        <HideWhenScrolling>
          <AppBar onClickMenuIcon={onClickMenuIcon} title="hoge" />
        </HideWhenScrolling>
        <Drawer
          onClose={onCloseDrawer}
          anchor="top"
          isOpen={state.menuDrawer}
          linkList={LINK_CONFIG}
        />
        <Container>
          <Box my={2}>{children}</Box>
          <ScrollToTop anchorId="top" />
        </Container>
      </React.Fragment>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element,
};
