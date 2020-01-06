import React from 'react';
import GridList from '~/components/app/GridList';

const GridDataObjList = [
  {
    title: 'Golang',
    subtitle: 'About 2 month, Private. love the most.',
    img: '/static/svg/go.svg',
    cols: 2,
    href: '/v1/profile/golang',
  },
  {
    title: 'Python',
    subtitle: 'About 1 year, Business',
    img: '/static/svg/python.svg',
    cols: 1,
    href: '/v1/profile/python',
  },
  {
    title: 'JavaScript(React.js)',
    subtitle: 'About 1 year, Business',
    img: '/static/svg/javascript.svg',
    cols: 1,
    href: '/v1/profile/javascript',
  },
  {
    title: 'Java',
    subtitle: 'About 1 month, Business',
    img: '/static/svg/java.svg',
    cols: 1,
    href: '/v1/profile/java',
  },
  {
    title: 'Linux',
    subtitle: 'About 2 month, private',
    img: '/static/svg/linux.svg',
    cols: 1,
    href: '/v1/profile/linux',
  },
];

export default function ImageGridList() {
  return (
    <div>
      <GridList
        onClickGrid={e => console.log(e.target)}
        data={GridDataObjList}
        gridCols={2}
      />
    </div>
  );
}