import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  text: {
    textDecoration: 'none',
    color: 'inherit',
    fontFamily: theme.typography.h5.fontFamily,
  },
}));

const BasicLink = ({ href, title }) => {
  const { text } = useStyles();
  return (
    <span>
      <Link href={href}>
        <a className={text}>{title}</a>
      </Link>
    </span>
  );
};

BasicLink.propTypes = {
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BasicLink;
