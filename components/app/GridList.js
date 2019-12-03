import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import Link from '~/components/common/IconLink';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  titleBar: {
    // see https://cssgradient.io/
    background: 'linear-gradient(143deg, rgba(0,0,0,0.500437675070028) 0%, rgba(0,0,0,0.3491771708683473) 50%, rgba(82,76,76,0.2007177871148459) 100%)',
    color: theme.palette.secondary.dark,
    fontFamily: theme.typography.subtitle1.fontFamily,
    fontWeight: theme.typography.subtitle1.weight,
    zIndex: 1,
  },
  icon: {
    color: 'white'
  },
}));
export default function BasicGridList({
  gridCols,
  data,
  onClickGrid,
  spacing = 4,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <GridList
        cellHeight="auto"
        spacing={spacing}
        className={classes.gridList}
        cols={gridCols}
      >
        {data.map((obj, idx) => (
          <GridListTile onClick={onClickGrid} key={idx} cols={obj.cols || 1}>
            <Link href={obj.href}>
              <GridListTileBar
                title={obj.title}
                subtitle="i love gopher."
                //   titlePosition="top"
                actionIcon={
                  <IconButton
                    aria-label={`star ${obj.title}`}
                    className={classes.icon}
                  >
                    <StarBorderIcon />
                  </IconButton>
                }
                actionPosition="left"
                className={classes.titleBar}
              />
            </Link>
            <Link href={obj.href}>
              <img style={{ width: '100%', height: '100%' }} src={obj.img} />
            </Link>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

BasicGridList.propTypes = {
  gridCols: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  onClickGrid: PropTypes.func.isRequired,
  spacing: PropTypes.number,
};
