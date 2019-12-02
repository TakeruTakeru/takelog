import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: '100%',
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

 const hoge = [
   {
     title: 'hoge',
     desc: 'i like hogehoge',
     img: '/static/img/gopher.png',
     cols: 2
   },
   {
    title: 'ho',
    desc: 'i like hoho',
    img: '/static/img/java_logo.png',
    cols: 1
  },
  {
    title: 'ho',
    desc: 'i like hoho',
    img: '/static/img/python_logo.png',
    cols: 1
  },
  {
    title: 'ho',
    desc: 'i like hoho',
    img: '/static/img/gopher.png',
    cols: 2
  },
  {
    title: 'ho',
    desc: 'i like hoho',
    img: '/static/img/python_logo.png',
    cols: 2
  },
 ];



export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList  className={classes.gridList} cols={2}>
        {hoge.map((tile, idx) => (
          <GridListTile key={idx} cols={tile.cols || 1}>
            <img style={{width: '100%', height: '100%'}} src={tile.img} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
