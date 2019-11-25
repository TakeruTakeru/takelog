import React from 'react';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Wrapper from './wrapper/ScrollToTop';

function ScrollToTopIcon() {
  return (
    <Fab color="secondary" size="small" aria-label="scroll back to top">
      <KeyboardArrowUpIcon />
    </Fab>
  );
}

export default function ScrollToTopIconWrapped( { anchorId }) {
    return (
        <Wrapper anchorId={anchorId}>
            <ScrollToTopIcon />
        </Wrapper>
    );
}
