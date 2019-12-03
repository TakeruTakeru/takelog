import React from 'react';
import PropTypes from 'prop-types';
import Body from './body';
import Container from '@material-ui/core/Container';
import ScrollToTop from '~/components/actions/ScrollToTop';
import Header from './header';

const ELEMENT_ID_MAP = {
  headerId: 'root-header',
  bodyId: 'root-body',
  footerId: 'root-footer'
};

export default function Layout({ children, title, linkList }) {
  const { headerId, bodyId } = ELEMENT_ID_MAP;
  return (
    <div>
      <Header id={headerId} title={title} linkList={linkList} />
      <Container>
        <Body id={bodyId}>
          {children}
        </Body>
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
