import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const CustomLink = ({ href, children }) => {
  const ref = React.createRef;
  return (
    <span>
      <Link href={href}>
        <div ref={ref}>{children}</div>
      </Link>
    </span>
  );
};

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default CustomLink;
