import React from 'react';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  root: {
    backgroundColor: '#3e3e3e',
    color: '#ffffff',
  },
  siteTitle: {
      fontSize: '1.7rem',
      padding: '5vw'
  },
  siteLinkList: {
    listStyle: 'none',
    padding: '10px',
  },
  siteLinkItem: {
    display: 'inline-block',
    marginLeft: '3vw'
  },
  siteLinkItemLink: {
    color: '#4aac00',
    '&:visited': {
        color: '#6200Ac'
    }
  },
};

function Footer({ id, title, classes }) {
  const {
    root,
    siteTitle,
    siteLinkList,
    siteLinkItem,
    siteLinkItemLink,
  } = classes;
  return (
    <div id={id} className={root}>
      <h3 className={siteTitle}>{title}</h3>
      <ul className={siteLinkList}>
        <li className={siteLinkItem}>
          <a
            className={siteLinkItemLink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/iamtakeruXO"
          >
            <TwitterIcon fontSize='large' />
          </a>
        </li>
        <li className={siteLinkItem}>
          <a
            className={siteLinkItemLink}
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/TakeruTakeru"
          >
            <GitHubIcon fontSize='large' />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default withStyles(styles)(Footer);

Footer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  classes: PropTypes.object,
};
