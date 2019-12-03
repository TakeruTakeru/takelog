import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

export default function Layout({ id, children }) {
  return (
    <div id={id}>
      <Box my={2}>{children}</Box>
    </div>
  );
}

Layout.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
