const path = require('path')

module.exports = () => ({
    enhanceAppFiles: path.resolve(__dirname, 'src/enhanceApp.js'),
    extendMarkdown: md => {
        md.use(require('./out/throwMath')),
        md.use(require('./out/enviroments'))
    },
})
