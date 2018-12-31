/* https://github.com/Binaryify/NeteaseCloudMusicApi */

/*
class Netease

{
    id: pos int
    type: audio|alumn|vedio
    opts: any

    ?{
        crypto: 'weapi', 
        cookie: query.cookie, 
        proxy: query.proxy
    }
}

*/


import crypto from 'crypto'






function song_detail(query, request) {
    query.ids = query.ids.split(/\s*,\s*/)
    const data = {
        c: '[' + query.ids.map(id => ('{"id":' + id + '}')).join(',') + ']',
        ids: '[' + query.ids.join(',') + ']'
    }
    return request(
        'POST', 'https://music.163.com/weapi/v3/song/detail', data,
        {
            crypto: 'weapi', 
            cookie: query.cookie, 
            proxy: query.proxy
        }
    )
}



function song_url(query, request){
    if(!('MUSIC_U' in query.cookie)) query.cookie._ntes_nuid = crypto.randomBytes(16).toString('hex')
    const data = {
        ids: '[' + query.id + ']',
        br: parseInt(query.br || 999000)
    }
    return request(
        'POST', 'https://music.163.com/weapi/song/enhance/player/url', data,
        {crypto: 'weapi', cookie: query.cookie, proxy: query.proxy}
    )
}



function lyric(query, request) {
    return request(
        'POST', `https://music.163.com/weapi/song/lyric?os=osx&id=${query.id}&lv=-1&kv=-1&tv=-1`, {},
        {
            crypto: 'weapi', 
            cookie: query.cookie, 
            proxy: query.proxy
        }
    )
}


function mv_url(query, request){
    const data = {
        id: query.id,
        r: query.res || 1080
    }
    return request(
        'POST', 'https://music.163.com/weapi/song/enhance/play/mv/url', data,
        {
            crypto: 'weapi', 
            cookie: query.cookie, 
            proxy: query.proxy
        }
    )
}