import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import ScrollToTop from '~/components/actions/ScrollToTop';
import Header from './header';

const ELEMENT_ID_MAP = {
  headerId: 'root-header',
  bodyId: 'root-body',
  footerId: 'root-footer'
};

export default function Layout({ children, title, linkList }) {
  const { headerId } = ELEMENT_ID_MAP;
  return (
    <div>
      <Header id={headerId} title={title} linkList={linkList} />
      <Container>
        <Box my={2}>{children}</Box>
        <ScrollToTop targetId={headerId} />
      </Container>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  linkList: PropTypes.array.isRequired,
};
