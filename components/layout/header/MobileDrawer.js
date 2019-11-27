import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import PropTypes from 'prop-types';
import Link from '~/components/common/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

function MobileMaterialDrawerList({ linkList, onClick }) {
  // this has next/Link probrem.
  return (
    <List component="nav" aria-label="main mailbox folders">
      {linkList.map((row, idx) => {
        return (
          <div key={idx} onClick={onClick}>
            <ListItem button component="a">
              <ListItemIcon>
                <ListItem button>
                  <Link href={row.href} title={row.title} />
                </ListItem>
              </ListItemIcon>
            </ListItem>
          </div>
        );
      })}
    </List>
  );
}

MobileMaterialDrawerList.propTypes = {
  linkList: PropTypes.array,
  onClick: PropTypes.func,
};

function MobilePureDrawerList({ linkList, onClick }) {
  return (
    <div>
      <ul>
        {linkList.map((row, idx) => {
          return (
            <li key={idx} onClick={onClick}>
              <Link href={row.href} title={row.title} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

MobilePureDrawerList.propTypes = {
  linkList: PropTypes.array,
  onClick: PropTypes.func,
};

export default function MobileDrawer({
  isOpen,
  onClose,
  linkList,
  anchor = 'top',
}) {
  return (
    <nav role="presentation">
      <Drawer anchor={anchor} open={isOpen} onClose={onClose}>
        <MobilePureDrawerList linkList={linkList} onClick={onClose} />
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
