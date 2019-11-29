import React from 'react';
import PropTypes from 'prop-types';
import Link from '~/components/common/Link';
import CustomLink from '~/components/common/IconLink';
import Logo from '~/components/common/Logo';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const icons = [
  <HomeTwoToneIcon color="inherit" fontSize="large" key={1} />,
  <PermIdentityTwoToneIcon color="inherit" fontSize="large" key={2} />,
  <ImportContactsTwoToneIcon color="inherit" fontSize="large" key={3} />,
];

const styles = {
  root: {
    background: 'linear-gradient(to right, #B06AB3, #4568DC)',
    padding: '10px 10px 0px 10px',
    marginBottom: '0px',
  },
  header: {
    display: 'flex',
  },
  headerIcon: {
    flexGrow: '1',
    justifyContent: 'center',
    display: 'flex',
  },
  listWrapper: {
    listStyle: 'none',
    padding: '0px',
    marginBottom: '0px',
  },
  item: {
    fontSize: '1rem',
  },
  itemIcon: {
    marginRight: '15px',
    color: 'white',
    verticalAlign: 'middle',
  },
  itemText: {
    letterSpacing: '3px',
    fontFamily:
      '-apple-system, system-ui, "Segoe UI", Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
    fontWeight: 700,
    color: 'white',
  },
  itemDivider: {
    height: '1px',
    background: 'rgba(255, 255, 255, 0.5)',
  },
  headerDivider: {
    height: '1px',
  },
};

function MobilePureDrawerList({ linkList, onClick, classes }) {
  const { root, header, headerIcon, listWrapper, item, itemIcon, itemText, itemDivider, headerDivider } = classes;
  return (
    <div className={root}>
      <div className={header}>
          <div className={headerIcon}>
            <Logo path="/static/food_honetsuki_frank.png" />
          </div>
      </div>
      <Divider classes={{ root: headerDivider }} variant="fullWidth" />
      <ul className={listWrapper}>
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
                <Divider classes={{ root: itemDivider }} variant="fullWidth" />
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
