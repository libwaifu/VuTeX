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
        'mathjax': {},
        '@vutex/media': {},
        '@vuepress/google-analytics': {},
        '@vuepress/back-to-top': {},
        '@vuepress/medium-zoom': {},
        '@vuepress/register-components': {
            componentsDir: [path.resolve(__dirname, 'components')],
        },
        '@vuepress/blog': {
            directories: [{
                id: 'post',
                dirname: '_posts',
                path: '/',
                pagination: {
                    perPagePosts: 2,
                },
            }],
            frontmatters: [{
                id: 'tag',
                keys: ['tag', 'tags'],
                path: '/tag/',
                layout: 'Tag',
                frontmatter: { title: 'Tag' },
                itemlayout: 'Tag',
                pagination: {
                    perPagePosts: 3
                },
            }],
        },
    },
};
