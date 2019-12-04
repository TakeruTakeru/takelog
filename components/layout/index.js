import React from 'react';
import PropTypes from 'prop-types';
import Body from './body';
import Container from '@material-ui/core/Container';
import ScrollToTop from '~/components/actions/ScrollToTop';
import { LinearProgressBar } from '~/components/actions/Loading';
import Header from './header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
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
  const { headerId, bodyId } = ELEMENT_ID_MAP;
  const classes = useStyles();
  const [state, setState] = React.useState({
    loading: true,
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
