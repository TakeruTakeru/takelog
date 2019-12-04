import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

function Title({ title, variant, className={} }) {
  return <Typography className={className} variant={variant}>{title}</Typography>;
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  className: PropTypes.string
};

export default Title;
