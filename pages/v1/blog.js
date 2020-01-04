import React, {useEffect} from 'react';
import { HttpClient } from '~/api';
import { parseFileResponse } from '~/api/parser';
import { MDRenderer } from '~/components/app/Renderer';

function Home(props) {
  var mdText;
  useEffect(() => {
    const textDecoder = new TextDecoder('utf8');
    var result = parseFileResponse(props);
    // var ins = document.getElementById('hoge');
    if (!result) {
      mdText = '# Sorry, Error Happened.';
    } else {
      var base64UintArr = base64DecToArr(result.data, 1);
      mdText = textDecoder.decode(base64UintArr);
    }
    document.getElementById('md-content').innerHTML = MDRenderer(mdText);

  });
  return (
    <div style={{ background: 'white' }}>
      <div id="md-content"></div>
      {/* {[...new Array(12)]
        .map(
          () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
        )
        .join('\n')} */}
    </div>
  );
}

Home.getInitialProps = async () => {
  const res = await HttpClient.get('v1/gstorage/files/dGFrZXJ1LXN0b3JhZ2UvYXJ0aWNsZS_pgIDogbfmiYvntprjgY3jgb7jgajjgoEubWQ=');

  return res;
};

export default Home;

function base64DecToArr (sBase64, nBlockSize) {
  var
    sB64Enc = sBase64.replace(/[^A-Za-z0-9+/]/g, ''), nInLen = sB64Enc.length,
    nOutLen = nBlockSize ? Math.ceil((nInLen * 3 + 1 >>> 2) / nBlockSize) * nBlockSize : nInLen * 3 + 1 >>> 2, aBytes = new Uint8Array(nOutLen);

  for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
    nMod4 = nInIdx & 3;
    nUint24 |= b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
    if (nMod4 === 3 || nInLen - nInIdx === 1) {
      for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
        aBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
      }
      nUint24 = 0;
    }
  }

  return aBytes;
}

function b64ToUint6 (nChr) {

  return nChr > 64 && nChr < 91 ?
      nChr - 65
    : nChr > 96 && nChr < 123 ?
      nChr - 71
    : nChr > 47 && nChr < 58 ?
      nChr + 4
    : nChr === 43 ?
      62
    : nChr === 47 ?
      63
    :
      0;

}
