import React from 'react';
import PropTypes from 'prop-types';

export default function Layout({ id, children }) {
  return (
    <div id={id}>
      {children}
    </div>
  );
}

Layout.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
