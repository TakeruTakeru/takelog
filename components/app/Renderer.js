import marked from 'marked';
import PropTypes from 'prop-types';

export function MDRenderer(text) {
    return marked(text);
}

MDRenderer.propTypes = {
    text: PropTypes.string.isRequired
};
