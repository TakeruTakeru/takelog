import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import HideWhenScrolling from '~/components/actions/HideWhenScrolling';
import AppBar from '~/components/layout/AppBar';
import ScrollToTop from '~/components/actions/ScrollToTop';


export default function HideAppBar(props) {
  return (
    <div id='top'>
    <React.Fragment>
      <CssBaseline />
      <HideWhenScrolling {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">Scroll to Hide App Bar</Typography>
          </Toolbar>
        </AppBar>
      </HideWhenScrolling>
      <Toolbar />
      <Container>
        <Box my={2}>
          {[...new Array(12)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
            )
            .join('\n')}
        </Box>
      <ScrollToTop anchorId='top' />
      </Container>
    </React.Fragment>
    </div>
  );
}