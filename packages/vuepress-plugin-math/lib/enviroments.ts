const container = require('markdown-it-container')

module.exports = md => {
  md.use(...createContainer('def', 'Definition'))
  md.use(...createContainer('theo', 'Theorem'))
  md.use(...createContainer('lemma', 'Lemma'))
  md.use(...createContainer('inter', 'Inference'))
  md.use(...createContainer('prop', 'Proposition'))
  md.use(...createContainer('hypo', 'Hypothesis'))
  md.use(...createContainer('conj', 'Conjecture'))
}

function capitalize(str: string) {
  return str.toLowerCase().replace(/\b[a-z]/g, char => char.toUpperCase())
}

function createContainer (klass, defaultTitle) {
  return [container, klass, {
    render (tokens, idx) {
      const token = tokens[idx]
      const info = token.info.trim().slice(klass.length).trim()
      const title = `<p class="math-block-title">${info || defaultTitle}</p>\n`
      if (token.nesting === 1) {
        return `<div class="${klass} math-block">${title}`
      } else {
        return '</div>\n'
      }
    }
  }]
}
