import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function MobileDrawer({
  isOpen,
  onClose,
  linkList,
  anchor = 'top',
}) {
  return (
    <nav role="presentation">
      <ul>
        <Drawer anchor={anchor} open={isOpen} onClose={onClose}>
          {linkList.map((row, idx) => {
            return (
              <li key={idx} onClick={onClose}>
                <Link href={row.href}>
                  <a>{row.title}</a>
                </Link>
              </li>
            );
          })}
        </Drawer>
      </ul>
    </nav>
  );
}

MobileDrawer.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  linkList: PropTypes.array,
  anchor: PropTypes.string,
};
