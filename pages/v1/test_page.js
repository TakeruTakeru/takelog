import React, {useEffect} from 'react';
import { Render, RenderBuilder, headingFunc, textFunc, codeFunc, strongFunc } from '~/components/app/parser/md';

const rendererOpt = new RenderBuilder().setHeadingOpt(headingFunc)
  .setTextOpt(textFunc).setCodeOpt(codeFunc).setStrongOpt(strongFunc).build();
const test = `
# hoge\nhoge 
\`\`\`html:hoge.html
hoge -l
hoge -s
fa
\`\`\`

**strong**
`;

function Test() {
  useEffect(() => {
    document.getElementById('md-content').innerHTML = Render(test, rendererOpt);

  });
  return (
      <div id="md-content" />
  );
}

export default Test;