export function headingFunc(text, level) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
    return `
            <h${level} style="border-bottom:1px solid #dddddd;">
              <a name="${escapedText}" style="text-decoration-line:none;" href="#${escapedText}">
                <span style="font-size:0.9rem;vertical-align:top;">#</span>
              </a>
              ${text}
            </h${level}>`;
}

export function textFunc(text) {
  return `
    ${text}?
  `;
}

export function listFunc(body, ordered, start) {
  var style = '';
  if (start) {
    style = style + 'list-style-type:none;padding-left:0px;';
  } else {
    style = style + 'list-style-type:square;padding-left:5vw;';
  }
  return `
    <ol style="${style}">
      ${body}
    </ol>
  `;
}

export function listItemFunc(text, task, checked) {
  return `
    <li>${text}</li>
  `;
}

export function codeFunc(code, info) {
  var filename = info;
  if (info) {
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

export function codeSpanFunc(code) {
  return `
    <code style="${styleForCodeSpan}">\`${code}\`</code>
  `;
}

export function strongFunc(text) {
  return `
    <bold>${text}</bold>
  `;
}

export function linkFunc(href, title, text) {
  return `
      <a href=${href} style=${styleForLink} >
        ${(title||'') + ' ' + text}
      </a>
  `;
}

const styleForFilenameArea = 'display:inline-block;position:relative;padding-left:3px;padding-right:3px;color:#fff;left:10px;background-color:gray;';
const styleForCodeArea = 'background-color:#364549;color:#E3E3E3;';
const styleForCodeBody = 'font-size:1.1rem;padding-top:5px;line-height:1.4;';
const styleForCodeLine = 'white-space:pre;word-break:break-all;display:block;';
const styleForCodeSpan = 'backgroud:linen;color:deeppink';
const styleForLink = 'color:#4aac00;';