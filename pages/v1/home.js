import React from 'react';
import GridList from '~/components/app/GridList';
 const hoge = [
   {
     title: 'Golang',
     desc: 'About 2 month, Private. love the most.',
     img: '/static/svg/go.svg',
     cols: 2,
     href: '/v1/blog'
   },
   {
    title: 'Python',
    desc: 'About 1 year, Business',
    img: '/static/svg/python.svg',
    cols: 1,
    href: '/v1/blog'
  },
  {
    title: 'JavaScript(React.js)',
    desc: 'About 1 year, Business',
    img: '/static/svg/javascript.svg',
    cols: 1,
    href: '/v1/blog'
  },
  {
    title: 'Java',
    desc: 'About 1 month, Business',
    img: '/static/svg/java.svg',
    cols: 1,
    href: '/v1/blog'
  },
  {
    title: 'Linux',
    desc: 'About 2 month, private',
    img: '/static/svg/linux.svg',
    cols: 1,
    href: '/v1/blog'
  },
 ];



export default function ImageGridList() {

  return (
    <div>
      <GridList onClickGrid={(e) => console.log(e.target)} data={hoge} gridCols={2} />
    </div>
  );
}
