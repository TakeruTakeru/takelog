import marked from 'marked';
import PropTypes from 'prop-types';

export class RenderBuilder {
    constructor() {
        this.renderer = new marked.Renderer();
    }

    setHeadingOpt(renderingFunc) {
        this.renderer.heading = renderingFunc;
        return this;
    }

    setCodeOpt(renderingFunc) {
        this.renderer.code = renderingFunc;
        return this;
    }

    setBlockquoteOpt(renderingFunc) {
        this.renderer.blockquote = renderingFunc;
        return this;
    }

    setHtmlOpt(renderingFunc) {
        this.renderer.html = renderingFunc;
        return this;
    }

    setHrOpt(renderingFunc) {
        this.renderer.hr = renderingFunc;
        return this;
    }

    setListOpt(renderingFunc) {
        this.renderer.list = renderingFunc;
        return this;
    }

    setListItemOpt(renderingFunc) {
        this.renderer.listitem = renderingFunc;
        return this;
    }

    setCheckboxOpt(renderingFunc) {
        this.renderer.checkbox = renderingFunc;
        return this;
    }

    setParagraphOpt(renderingFunc) {
        this.renderer.paragraph = renderingFunc;
        return this;
    }

    setTableOpt(renderingFunc) {
        this.renderer.table = renderingFunc;
        return this;
    }

    setTableRowOpt(renderingFunc) {
        this.renderer.tablerow = renderingFunc;
        return this;
    }

    setTableCellOpt(renderingFunc) {
        this.renderer.tablecell = renderingFunc;
        return this;
    }

    setStrongOpt(renderingFunc) {
        this.renderer.strong = renderingFunc;
        return this;
    }

    setEmOpt(renderingFunc) {
        this.renderer.em = renderingFunc;
        return this;
    }

    setCodespanOpt(renderingFunc) {
        this.renderer.codespan = renderingFunc;
        return this;
    }

    setBrOpt(renderingFunc) {
        this.renderer.br = renderingFunc;
        return this;
    }

    setDelOpt(renderingFunc) {
        this.renderer.del = renderingFunc;
        return this;
    }

    setLinkOpt(renderingFunc) {
        this.renderer.link = renderingFunc;
        return this;
    }

    setImageOpt(renderingFunc) {
        this.renderer.image = renderingFunc;
        return this;
    }

    setTextOpt(renderingFunc) {
        this.renderer.Text = renderingFunc;
        return this;
    }

    build() {
        return this.renderer;
    }
}

export function Render(text, opt) {
    return marked(text, {renderer: opt});
}

Render.propTypes = {
    text: PropTypes.string.isRequired,
    opt: PropTypes.array
};
