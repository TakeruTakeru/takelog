export function headingFunc(text, level) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    return `
            <h${level}>
              <a name="${escapedText}" class="anchor" href="#${escapedText}">
                <span class="header-link"></span>
              </a>
              ${text+'!'}
            </h${level}>`;
}

export function textFunc(text) {
  return `
    ${text}?
  `;
}

export function codeFunc(code, info) {
  var filename = info;
  if (info !== '') {
    const separateArr = info.split(':');
    if (separateArr.length === 2) {
      filename = separateArr[1];
    }
  }
  const codes = code.split('\n')
  const codeElem = codes.map((code, idx) => {
    return (
      `<span key=${idx} style=${styleForCodeLine}>${code}</span>`
    );
  });
  return `
    <div style=${styleForCodeArea}>
      <div style=${styleForFilenameArea}>
       ${filename}
      </div>
      <div style="${styleForCodeBody}padding:1em calc((100vw - 100%)/2)">
        <code>
          ${codeElem.join('')}
        </code>
      </div>
    </div>
  `;
}

export function  strongFunc(text) {
  return `
    ${text}!
  `;
}

const styleForFilenameArea = 'display:inline-block;position:relative;padding-left:3px;padding-right:3px;color:#fff;left:10px;background-color:gray;';
const styleForCodeArea = 'background-color:#364549;color:#E3E3E3;';
const styleForCodeBody = 'font-size:1.1rem;padding-top:5px;line-height:1.4;';
const styleForCodeLine = 'white-space:pre;word-break:break-all;display:block;';