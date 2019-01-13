const path = require('path');

module.exports = {
    layoutDir: 'layouts',
    plugins: {
        '@vutex/component-container': {
            prefix: 'custom-',
            alias: {
                music: 'audio',
            },
        },
        '@vutex/math': {},
        '@vutex/media': {},
        '@vuepress/google-analytics': {},
        '@vuepress/back-to-top': {},
        '@vuepress/medium-zoom': {},
        '@vuepress/register-components': {
            componentsDir: [path.resolve(__dirname, 'components')],
        },
        '@yubisaki/blog': {
            pageEnhancers: [
                {
                    when: ({ frontmatter }) => 
                        frontmatter.layout === 'Activity',
                    frontmatter: { layout: 'Activity' },
                },
            ],
            tagUrl: '/tag/',
            categoryUrl: '/category/',
        },
        '@yubisaki/pagination': {},
    },
};
