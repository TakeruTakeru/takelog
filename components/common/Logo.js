import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const SimpleLogoStyle = {
  root: {
    margin: '5px',
  },
  img: {
    width: '8vw',
  },
};

const SimpleLogo = ({ path, classes }) => {
  const { root, img } = classes;
  return (
    <div className={root}>
      <p>
        <img src={path} className={img} />
      </p>
    </div>
  );
};

SimpleLogo.propTypes = {
  path: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(SimpleLogoStyle)(SimpleLogo);
