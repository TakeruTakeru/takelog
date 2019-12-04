import React from 'react';
import Img from 'react-image';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const commonStyle = {
    display: 'inline-block'
};

const useStyles = makeStyles(theme => ({
  s: {
      ...commonStyle,
      width: '10vw',
  },
  m: {
    ...commonStyle,
    width: '30vw',
  },
  l: {
    ...commonStyle,
    width: '50vw',
  },
}));

function Image({ src, loader, size = 's' }) {
  const classes = useStyles();
  return (
    <p className={classes[size]}>
      <Img src={src} loader={loader} />
    </p>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  loader: PropTypes.element.isRequired,
  size: PropTypes.oneOf(['s', 'm', 'l']),
};

export default Image;
