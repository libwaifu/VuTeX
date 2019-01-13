import {Netease} from './cilent'
let cilent = new Netease()

/* 
https://github.com/darknessomi/musicbox/wiki/网易云音乐新版WebAPI分析。
https://github.com/Binaryify/NeteaseCloudMusicApi 
*/

/*
外链: http://music.163.com/song/media/outer/url?id=618325.mp3
歌词: http://music.163.com/api/song/media?id=618325
*/



const unknowSong = {
    name: "Unknow Song",
    artist: "Unknow Artist",
    cover: "http://static.hdslb.com/images/akari.jpg",
    lyric: ""
  };
  const unknowVideo = {
    name: "Unknow Video",
  };


function transpose(Matrix: { length: any; }[]) {
    var w = Matrix.length ? Matrix.length : 0,
        h = Matrix[0] instanceof Array ? Matrix[0].length : 0;
    if (h === 0 || w === 0) { return []; }
    var i: number, j: number, T = [];
    for (i = 0; i < h; i++) {
        T[i] = [];
        for (j = 0; j < w; j++) {
            T[i][j] = Matrix[j][i];
        }
    }
    return T
}
/**
 * 不清楚是否是永久链接
 * */
async function getAudioURLs(ids: number[]) {
    let str = ids.join(",");
    let ans = await cilent.url(str);
    let attr = JSON.parse(JSON.stringify(ans)).data;
    return attr.map(e=>e.url)
}


async function getAudioLyric(ids: number) {
    let ans = await cilent.lyric(ids)
    let attr = JSON.parse(JSON.stringify(ans))
    if(attr.nolyric){
        return ''
    }
    else {
        return attr.lrc.lyric
    }
}
async function getAudioLyrics(ids: number[]){
    let ans =await Promise.all(ids.map(getAudioLyric))
    return ans
}

async function getPlaylist(id: number) {
    let ans = await cilent.playlist(id)
    let attr = JSON.parse(JSON.stringify(ans)).playlist.tracks
    let ids = attr.map(e=>e.id)
    let album = transpose([
        getAudioURLs(ids), //url
        attr.map(e=>e.name), //name
        attr.map(e=>e.ar[1].name), //artist
        attr.map(e=>e.al.picUrl),//cover
        getAudioLyrics(ids),
    ]);
    return album
}

/* 
是否可以使用 
http://music.163.com/song/media/outer/url?id=767406.mp3


*/

getAudioURLs([35755273,511364915]).then(console.log)
getAudioLyrics([35755273,511364915]).then(console.log)