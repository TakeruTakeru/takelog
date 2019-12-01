import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';

const CustomLinkStyle = {
  root: {
    // backgroundColor: 'gray'
  },
};

const CustomLink = ({ href, children, classes }) => {
  const { root } = classes;
  return (
    <span className={root}>
      <Link href={href}>
        {children}
      </Link>
    </span>
  );
};

CustomLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  classes: PropTypes.object,
};

export default withStyles(CustomLinkStyle)(CustomLink);
