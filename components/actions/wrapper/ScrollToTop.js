import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import { theme } from '~/config';
import PropTypes from 'prop-types';

const _ScrollTopWrapperStyle = {
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
};

function _ScrollTopWrapper({ classes, children, anchorId }) {
  const trigger = useScrollTrigger({
    // target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 150,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      `#${anchorId}`
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

_ScrollTopWrapper.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.element,
  anchorId: PropTypes.string
};

const ScrollTopWrapper = withStyles(_ScrollTopWrapperStyle)(_ScrollTopWrapper);

export default ScrollTopWrapper;
