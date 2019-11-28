import React from 'react';
import PropTypes from 'prop-types';
import Link from '~/components/common/Link';
import CustomLink from '~/components/common/IconLink';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import { withStyles } from '@material-ui/core/styles';

const icons = [
  <HomeTwoToneIcon fontSize="large" key={1} />,
  <PermIdentityTwoToneIcon fontSize="large" key={2} />,
  <ImportContactsTwoToneIcon fontSize="large" key={3} />,
];

const styles = {
  root: {
    background: 'linear-gradient(to right, #B06AB3, #4568DC)',
  },
  wrapper: {
    listStyle: 'none',
    padding: '10px',
  },
  item: {
    fontSize: '1.3rem',
  },
  itemIcon: {
      marginRight: '15px',
  },
  itemText: {
      letterSpacing: '3px'

  },
};

function MobilePureDrawerList({ linkList, onClick, classes }) {
  const { root, wrapper, item, itemIcon, itemText } = classes;
  return (
    <div className={root}>
      <ul className={wrapper}>
        {linkList.map((row, idx) => {
          return (
            <CustomLink key={idx} href={row.href}>
            <li className={item} key={idx} onClick={onClick}>
              <span className={itemIcon}>
                <CustomLink href={row.href}>{icons[idx]}</CustomLink>
              </span>
              <span className={itemText}>
                <Link href={row.href} title={row.title} />
              </span>
            </li>
            </CustomLink>
          );
        })}
      </ul>
    </div>
  );
}

MobilePureDrawerList.propTypes = {
  linkList: PropTypes.array,
  onClick: PropTypes.func,
  classes: PropTypes.object,
};

export default withStyles(styles)(MobilePureDrawerList);
