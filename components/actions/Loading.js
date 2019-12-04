import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Title from '~/components/common/Title';
import Img from '~/components/common/Image';

const useStyles = makeStyles(theme => ({
  load: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    padding: '10px',
    zIndex: 9999,
    background: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  wrapper: {
    position: 'absolute',
    bottom: '50%',
    right: '0',
    left: '0',
    width: '80%',
    margin: 'auto',
  },
  notload: {
    display: 'none',
  },
  textWrapper: {
    textAlign: 'center',
  },
  text1: {
    fontFamily: theme.typography.h5.fontFamily,
    display: 'inline-block',
  },
  text2: {
    fontFamily: theme.typography.h5.fontFamily,
    display: 'inline-block',
    animation: '$flashingText 1s steps(2, end) infinite',
  },
  text3: {
    fontFamily: theme.typography.h5.fontFamily,
    display: 'inline-block',
    animation: '$flashingText 2s steps(2, end) infinite',
  },
  text4: {
    fontFamily: theme.typography.h5.fontFamily,
    display: 'inline-block',
    animation: '$flashingText 3s steps(2, end) infinite',
  },
  img: {
    textAlign: 'right',
    animation: '$runningCharactor 3s steps(2, end) infinite',
  },
  '@keyframes runningCharactor': {
    '0%': { transform: 'translateX(-10%)', opacity: '1' },
    '25%': { transform: 'translateX(-25%)', opacity: '0.8' },
    '50%': { transform: 'translateX(-50%)', opacity: '0.6' },
    '75%': { transform: 'translateX(-80%)', opacity: '0.4' },
    '100%': { transform: 'translateX(-100%)', opacity: '0.1' },
  },
  '@keyframes flashingText': {
    '0%': { opacity: '1' },
    '100%': { opacity: '0' },
  },
}));

export function LinearProgressBar({ loading }) {
  const {
    load,
    wrapper,
    notload,
    textWrapper,
    text1,
    text2,
    text3,
    text4,
    img,
  } = useStyles();
  return (
    <div className={loading ? load : notload}>
      <div className={wrapper}>
        <div className={textWrapper}>
          <Title className={text1} title="Loading" variant="h6" />
          <Title className={text2} title="." variant="h6" />
          <Title className={text3} title="." variant="h6" />
          <Title className={text4} title="." variant="h6" />
        </div>
        <div className={img}>
          <Img src="/static/svg/go.svg" loader={<div />} size="s" />
        </div>
        <LinearProgress color="secondary" />
      </div>
    </div>
  );
}

LinearProgressBar.propTypes = {
  loading: PropTypes.bool.isRequired,
};
