import React from 'react';
import PropTypes from 'prop-types';
import Link from '~/components/common/Link';
import CustomLink from '~/components/common/IconLink';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import PermIdentityTwoToneIcon from '@material-ui/icons/PermIdentityTwoTone';
import ImportContactsTwoToneIcon from '@material-ui/icons/ImportContactsTwoTone';
import { makeStyles } from '@material-ui/core/styles';

const icons = [
  <HomeTwoToneIcon color="inherit" fontSize="large" key={1} />,
  <PermIdentityTwoToneIcon color="inherit" fontSize="large" key={2} />,
  <ImportContactsTwoToneIcon color="inherit" fontSize="large" key={3} />,
];
const s = makeStyles(theme => {
  console.log(theme);
  return {};
});

const useStyles = makeStyles(theme => ({
  listWrapper: {
    listStyle: 'none',
    padding: '0px',
    marginBottom: '0px',
  },
  item: {
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid',
  },
  itemIcon: {
    display: 'flex',
    marginRight: '15px',
    verticalAlign: 'middle',
    padding: theme.spacing(1),
  },
  itemText: {
    display: 'flex',
    letterSpacing: '3px',
    flexGrow: 1,
    justifyContent: 'flex-end',
    animation: `$textHopping 1s ${theme.transitions.easing.easeIn} infinite alternate`,
    '&::before': {
      content: '"-"',
      marginRight: '5px',
    },
    '&:hover': {
      color: theme.palette.secondary.dark,
      transition: 'all 300ms 0s ease',
    },
  },
  '@keyframes textHopping': {
    '0%': { transform: 'translateX(0px)' },
    '100%': { transform: 'translateX(-10px)', color: theme.palette.primary.light },
  },
}));

function MobilePureDrawerList({ linkList, onClick }) {
  const classes = useStyles();
  s();
  const { listWrapper, item, itemIcon, itemText } = classes;
  return (
    <ul className={listWrapper}>
      {linkList.map((row, idx) => {
        return (
          <CustomLink key={idx} href={row.href}>
            <li className={item} key={idx} onClick={onClick}>
              <div className={itemIcon}>
                <CustomLink href={row.href}>{icons[idx]}</CustomLink>
              </div>
              <div className={itemText}>
                <Link href={row.href} title={row.title} />
              </div>
            </li>
          </CustomLink>
        );
      })}
    </ul>
  );
}

MobilePureDrawerList.propTypes = {
  linkList: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MobilePureDrawerList;
