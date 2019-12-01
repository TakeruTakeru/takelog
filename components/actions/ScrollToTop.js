import React from 'react';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Wrapper from './wrapper/ScrollToTop';
import PropTypes from 'prop-types';

function ScrollToTopIcon() {
  return (
    <Fab color="secondary" size="small" aria-label="scroll back to top">
      <KeyboardArrowUpIcon />
    </Fab>
  );
}

export default function ScrollToTopIconWrapped( { targetId }) {
    return (
        <Wrapper anchorId={targetId}>
            <ScrollToTopIcon />
        </Wrapper>
    );
}

ScrollToTopIconWrapped.propTypes = {
  targetId: PropTypes.string.isRequired
};