import React, { useEffect } from 'react';
import config from '~/config';
import { parseFileResponse } from '~/api/parser';
import { HttpClient } from '~/api';
import { Render, RenderBuilder, headingFunc, textFunc,
   codeFunc, strongFunc, codeSpanFunc, listFunc,
    listItemFunc, linkFunc } from '~/components/app/parser/md';

const rendererOpt = new RenderBuilder().setHeadingOpt(headingFunc)
  .setTextOpt(textFunc).setCodeOpt(codeFunc).setStrongOpt(strongFunc)
    .setCodeSpanOpt(codeSpanFunc).setListOpt(listFunc).setListItemOpt(listItemFunc).setLinkOpt(linkFunc).build();

const mdContentStyle = {
  'backgroundColor': '#fff',
  'borderRadius': '10px',
  'padding': '10px',
  'color': '#333333',
  'fontFamily': '-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Hiragino Kaku Gothic ProN,メイリオ,meiryo,sans-serif',
  'fontSize': '1.0rem',
  'lineHeight': '2',
};

const Post = (props) => {
  useEffect(()=>{
  var mdText;
    const textDecoder = new TextDecoder('utf8');
    var result = parseFileResponse(props);
    if (!result) {
      mdText = '# Sorry, Error Happened.';
    } else {
      var base64UintArr = base64DecToArr(result.data, 1);
      mdText = textDecoder.decode(base64UintArr);
    }
    document.getElementById('md-content').innerHTML = Render(mdText, rendererOpt);

  });
  return (
    <div id="md-content" style={mdContentStyle}/>
  );
};

Post.getInitialProps = async ({query}) => {
  const resource = config.resourceMap.filter(obj => {
    return obj.type === 'profile' && obj.name === query.content;
  });
  if(resource.length !== 1) {
    return {err: 'No Resources founded.'};
  }
  const res = await HttpClient.get(resource[0].url);
  return res;
};

export default Post;

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