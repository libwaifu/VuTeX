type AudioT = {
    url: string;
    name: string;
    artist: string;
    cover: string;
    lyric: string;
    //options?: [any]; 其他都是显示选项, 在 Vue 中处理
}

type AlbumT = AudioT[]

type VideoT = any

/*
真的需要处理这么多参数么
main:
    url: 'https://xn.tn/?/%E8%A7%86%E9%A2%91%E6%B5%8B%E8%AF%95/test.mp4',
    img: pic: 'https://camo.githubusercontent.com/0ade48acd75de2208c39e3c499f84c2fbfce47ba/687474703a2f2f692e696d6775722e636f6d2f323037636833362e6a7067'
    danmaku:


all:
   container: document.getElementById('dplayer'),
    autoplay: false,
    theme: '#FADFA3',
    loop: true,
    screenshot: true,
    hotkey: true,
    logo: 'logo.png',
    volume: 0.2,
    mutex: true,
    video: {
        url: 'demo.mp4',
        pic: 'demo.png',
        thumbnails: 'thumbnails.jpg',
        type: 'auto'
    },
    subtitle: {
        url: 'webvtt.vtt',
        type: 'webvtt',
        fontSize: '25px',
        bottom: '10%',
        color: '#b7daff'
    },
    danmaku: {
        id: 'demo',
        api: 'https://api.prprpr.me/dplayer/',
        token: 'demo',
        maximum: 3000,
        user: 'DIYgod',
        margin: {
            bottom: '15%'
        },
        unlimited: true
    },
    contextmenu: [
        {
            text: 'custom contextmenu',
            link: 'https://github.com/MoePlayer/DPlayer'
        }
    ]


*/

/*

需要个默认的图, VueAPlayer 那个图就不错

*/
