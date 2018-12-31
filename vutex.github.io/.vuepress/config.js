module.exports = {
    title: 'VuTeX',
    theme: '@vutex/vutex',
    description: '',
    dest: './static/',
    serviceWorker: true,
    evergreen: true,
    themeConfig: {
        github: 'Moe-Net',
        logo: 'https://vuejs.org/images/logo.png',
        accentColor: '#ac0b39',
        per_page: 10,
        lastUpdated: 'Last Updated', // string | boolean
        date_format: 'yyyy-MM-dd HH:mm:ss',
        nav: [
            { text: 'Home', link: '/', root: true },
            { text: 'Tags', link: '/tag/', tags: true },
            { text: 'Github', link: 'https://github.com/Moe-Net/VuTeX' },
        ],
        comment: {
            clientID: 'uuid',
            clientSecret: 'uuuuuuuuuuuuuuuuuuuuuuuuuuuid',
            repo: 'repo',
            owner: 'owner',
            admin: ['owner'],
            perPage: 5,
            // id: this.$site,      // Ensure uniqueness and length less than 50
            distractionFreeMode: false, // Facebook-like distraction free mode
        },
    },
    configureWebpack: {
        module: {
            rules: [{
                test: /\.ts$/,
                use: 'ts-loader',
            }],
        },
        resolve: {
            extensions: ['.ts'],
        },
    },
};
