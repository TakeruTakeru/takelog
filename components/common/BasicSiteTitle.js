import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

function BasicSiteTitle({ title }) {
  return <Typography variant="h5">{title}</Typography>;
}

BasicSiteTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BasicSiteTitle;
