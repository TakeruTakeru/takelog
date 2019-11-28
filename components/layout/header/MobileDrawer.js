import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';
import MobileMenuList from './MobileMenuList';

export default function MobileDrawer({
  isOpen,
  onClose,
  linkList,
  anchor = 'top',
}) {
  return (
    <nav role="presentation">
      <Drawer anchor={anchor} open={isOpen} onClose={onClose}>
        <MobileMenuList linkList={linkList} onClick={onClose} />
      </Drawer>
    </nav>
  );
}

MobileDrawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  linkList: PropTypes.array,
  anchor: PropTypes.string,
};
