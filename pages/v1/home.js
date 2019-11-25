import ScrollToTop from '~/components/actions/ScrollToTop';
import Header from '~/components/layout/header';

export default function() {
  return (
    <div>
        <div id="top">
            <Header />
        </div>
      <div>
        {[...new Array(12)]
          .map(
            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
          )
          .join('\n')}
      </div>
      <ScrollToTop anchorId='top' />
    </div>
  );
}
