import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Link from '@/custom/link';
import { materialUiTheme } from '~/config';

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`
  };
}

const styles = {
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: 'inherit',
    '&:selected': {
      color: 'black',
    },
  },
  indicator: {
    // height: '2px'
  },
  link: {
    '&:hover': {
      textDecoration: 'none !important'
    }
  },
  tabs: {
    backgroundColor: 'white',
    textAlign: 'right'
  },
  tab: {
    [materialUiTheme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
      padding: '0px',
      marginLeft: '20px',
      marginRight: '20px'
    },
    color: '#2A2B2E',
    fontFamily: 'News Cycle, sans-serif',
    fontSize: '2rem',
    paddingLeft: '5vw',
    paddingRight: '5vw',

    transition: 'all 300ms 0s ease-in',
    '&:focus': {
      color: '#2B9720',
    },
    '&:hover': {
      // 擬似クラスをメディアクエリしたい時は擬似クラス内に書く。
      [materialUiTheme.breakpoints.down('xs')]: {
        fontSize: '1.8rem',
      },
      color: '#419D78',
      fontSize: '2.3rem',
      borderBottom: '1px solid #64F58D',  
    }
  },
  wrapper :{
    // position: 'absolute'
  }
};

function MenuTab({ classes, links }) {
  const { root, indicator, tabs, tab, wrapper } = classes;
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <div className={root}>
      <AppBar position="relative" color="default">
        <Tabs
          classes={{ indicator: indicator }}
          className={tabs}
          value={value}
          onChange={handleChange}
          scrollButtons="off"
          aria-label="full width tabs example"
          centered
        >
          {links.map((linkObj, idx) => {
            return (
              <Link className={classes.link} key={idx} href={linkObj.href}>
                <Tab
                  classes={{ wrapper: wrapper }}
                  className={tab}
                  key={idx}
                  onClick={() => handleChange(idx)}
                  label={linkObj.title}
                  {...a11yProps(idx)}
                ></Tab>
              </Link>
            );
          })}
        </Tabs>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(MenuTab);
