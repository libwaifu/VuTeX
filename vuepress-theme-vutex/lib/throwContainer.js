const yaml = require('js-yaml')

// https://github.com/markdown-it/markdown-it-container/blob/master/index.js
module.exports = function container_plugin(md) {
    let min_markers = 3, marker_str  = '%'

    function container(state, startLine, endLine, silent) {
        let pos, nextLine, marker_count, markup, params, token,
            old_parent, old_line_max,
            auto_closed = false,
            start = state.bMarks[startLine] + state.tShift[startLine],
            max = state.eMarks[startLine];

        if (marker_str !== state.src[start]) return false

        // Check out the rest of the marker string
        for (pos = start + 1; pos <= max; pos++) {
            if (marker_str !== state.src[pos]) {
                break;
            }
        }

        marker_count = pos - start;
        if (marker_count < min_markers) return false

        markup = state.src.slice(start, pos);
        params = state.src.slice(pos, max);

        // Since start is found, we can report success here in validation mode
        if (silent) return true

        // Search for the end of the block
        nextLine = startLine;

        while (nextLine < endLine) {
            nextLine++;

            start = state.bMarks[nextLine] + state.tShift[nextLine];
            max = state.eMarks[nextLine];

            if (marker_str !== state.src[start]) continue

            for (pos = start + 1; pos <= max; pos++) {
                if (marker_str !== state.src[pos]) {
                    break;
                }
            }

            // closing code fence must be at least as long as the opening one
            if (pos - start < marker_count) {
                continue; 
            }

            // make sure tail has spaces only
            pos = state.skipSpaces(pos);

            if (pos < max) {
                continue; 
            }

            // found!
            auto_closed = true;
            break;
        }

        old_parent = state.parentType;
        old_line_max = state.lineMax;
        state.parentType = 'container';

        // this will prevent lazy continuations from ever going past our end marker
        state.lineMax = nextLine;

        const content = state.src.split(/\r?\n/g).slice(startLine + 1, nextLine).join('\n')
        const [name, param] = params.trim().split(' ', 2)

        token        = state.push('component-container', 'div', 1);
        token.name   = name;
        token.param  = param;
        token.markup = markup;
        token.block  = true;
        token.data   = yaml.safeLoad(content);
        token.map    = [ startLine, nextLine ];

        state.parentType = old_parent;
        state.lineMax = old_line_max;
        state.line = nextLine + (auto_closed ? 1 : 0);

        return true;
    }

    md.block.ruler.before('fence', 'component-container', container, {
        alt: [ 'paragraph', 'reference', 'blockquote', 'list' ],
    });

    md.renderer.rules['component-container'] = (tokens, index) => {
        const token = tokens[index]
        if (!token.name) return ''
        const data = JSON.stringify(token.data || null).replace(/"/g, '\'')
        return `<component is="custom-${token.name}" param="${token.param || ''}" :data=${JSON.stringify(data)}/>`
    };
}
