const url = require("http");
/* 

register={
    Netease:{
        '歌单': https://music.163.com/#/playlist?id=152261
        'MV': https://music.163.com/#/video?id=02030E6CCAEBC5390E49E526935716D3
        'MP3': https://music.163.com/#/song?id=28160230
    }
}


解析 url, 如果已注册, 则返回相应的对象
    特例: 用户指定的话默认返回会被覆盖
    特例: 多个链接合并为 Album, 非法链接无视即可

如果未注册, 视为直链


*/

const unknow = {
  name: "Unknow Audio",
  artist: "Unknow Artist",
  cover: "http://static.hdslb.com/images/akari.jpg",
  lyric: ""
};

export function getAudio(url: string): AudioT {
  return {
    url: url,
    name: "string",
    artist: "string",
    cover: "string",
    lyric: "string"
  };
}

var input_url = "https://music.163.com/#/song?id=28160230";

let parser = url.parse(input_url.split("#/").join(""));
let task = parser.pathname.split("/")[1];
//let idd = parser.query.id;











