import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '8px',
  },
  img: {
    width: '8vw',
  },
}));

const SimpleLogo = ({ path }) => {
  const { img } = useStyles();
  return (
    <div>
      <p>
        <img className={img} src={path} />
      </p>
    </div>
  );
};

SimpleLogo.propTypes = {
  path: PropTypes.string.isRequired,
};

export default SimpleLogo;
