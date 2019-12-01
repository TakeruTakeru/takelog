import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';

const BasicLinkStyle = {
  root: {
    // backgroundColor: 'gray'
  },
  text: {
    textDecoration: 'none',
    color: 'inherit',
  },
};

const BasicLink = ({ href, title, classes }) => {
  const { root, text } = classes;
  return (
    <span className={root}>
      <Link href={href}>
        <a className={text}>{title}</a>
      </Link>
    </span>
  );
};

BasicLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.object,
};

export default withStyles(BasicLinkStyle)(BasicLink);
