import React from 'react';
import PropTypes from 'prop-types';
import Body from './body';
import Footer from './footer';
import Container from '@material-ui/core/Container';
import ScrollToTop from '~/components/actions/ScrollToTop';
import { LinearProgressBar } from '~/components/actions/Loading';
import Header from './header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    background: theme.palette.background.custom,
  },
  container: {
    marginTop: '10px',
    paddingBottom: '10px',
  },
}));

const ELEMENT_ID_MAP = {
  headerId: 'root-header',
  bodyId: 'root-body',
  footerId: 'root-footer',
};

export default function Layout({ children, title, linkList }) {
  const { headerId, bodyId, footerId } = ELEMENT_ID_MAP;
  const classes = useStyles();
  const [state, setState] = React.useState({
    loading: false,
  });

  return (
    <div className={classes.root}>
      {state.loading ? (
        <LinearProgressBar loading={state.loading} />
      ) : (
        <React.Fragment>
          <Header id={headerId} title={title} linkList={linkList} />
          <Container className={classes.container}>
            <Body id={bodyId}>{children}</Body>
            <ScrollToTop targetId={headerId} />
            <Footer id={footerId} title={title} />
          </Container>
        </React.Fragment>
      )}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  linkList: PropTypes.array.isRequired,
};
