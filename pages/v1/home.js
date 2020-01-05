import React from 'react';
import GridList from '~/components/app/GridList';
import { HttpClient } from '~/api';

const hoge = [
  {
    title: 'Golang',
    subtitle: 'About 2 month, Private. love the most.',
    img: '/static/svg/go.svg',
    cols: 2,
    href: '/v1/blog',
  },
  {
    title: 'Python',
    subtitle: 'About 1 year, Business',
    img: '/static/svg/python.svg',
    cols: 1,
    href: '/v1/blog',
  },
  {
    title: 'JavaScript(React.js)',
    subtitle: 'About 1 year, Business',
    img: '/static/svg/javascript.svg',
    cols: 1,
    href: '/v1/blog',
  },
  {
    title: 'Java',
    subtitle: 'About 1 month, Business',
    img: '/static/svg/java.svg',
    cols: 1,
    href: '/v1/blog',
  },
  {
    title: 'Linux',
    subtitle: 'About 2 month, private',
    img: '/static/svg/linux.svg',
    cols: 1,
    href: '/v1/blog',
  },
];

export default function ImageGridList(props) {
  return (
    <div>
      <GridList
        onClickGrid={e => console.log(e.target)}
        data={hoge}
        gridCols={2}
      />
    </div>
  );
}

ImageGridList.getInitialProps = async ({ req }) => {
  const client = HttpClient;
  // const res = await client.get('v1/test');
  // return res;
  return {res:1};
};
