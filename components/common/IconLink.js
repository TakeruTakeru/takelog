import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const CustomLink = ({ href, children }) => {
  return (
    <span>
      <Link href={href}>{children}</Link>
    </span>
  );
};

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default CustomLink;
