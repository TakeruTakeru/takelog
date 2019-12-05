import React from 'react';
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

function Image({ src, ref, size = 's' }) {
  const classes = useStyles();
  return (
    <p ref={ref} className={classes[size]}>
      <img src={src} />
    </p>
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  ref: PropTypes.object,
//   loader: PropTypes.element.isRequired,
  size: PropTypes.oneOf(['s', 'm', 'l']),
};

export default Image;
