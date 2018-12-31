import * as url from "url";
import * as crypto from 'crypto';
const iv = Buffer.from('0102030405060708')
const presetKey = Buffer.from('0CoJUm6Qyw8W8jud')
const linuxapiKey = Buffer.from('rFgB&h#%2?^eDg:Q')
const base62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const publicKey = '-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDgtQn2JZ34ZC28NWYpAUd98iZ37BUrX/aKzmFbt7clFSs6sXqHauqKWqdtLkF2KexO40H1YTX8z2lSgBBOAxLsvaklV8k4cBFK9snQXE9/DDaFt6Rr7iVZMldczhC0JNgTz+SHXT6CBHuX3e9SdB1Ua44oncaTWz7OBGLbCiK45wIDAQAB\n-----END PUBLIC KEY-----'
const unknowSong = {
  name: "Unknow Song",
  artist: "Unknow Artist",
  cover: "http://static.hdslb.com/images/akari.jpg",
  lyric: ""
};
const unknowVideo = {
  name: "Unknow Video",
};
const header = {
  "Accept": "*/*",
  "Accept-Encoding": "gzip,deflate,sdch",
  "Accept-Language": "zh-CN,zh;q=0.8,gl;q=0.6,zh-TW;q=0.4",
  "Connection": "keep-alive",
  "Content-Type": "application/x-www-form-urlencoded",
  "Host": "music.163.com",
  "Referer": "http://music.163.com",
  "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36",
}

/* 
https://github.com/darknessomi/musicbox/wiki/网易云音乐新版WebAPI分析。
https://github.com/Binaryify/NeteaseCloudMusicApi 
*/


/* 
Netease:{
    Audio: https://music.163.com/#/song?id=28160230
    Album: https://music.163.com/#/playlist?id=152261
    Video: https://music.163.com/#/video?id=02030E6CCAEBC5390E49E526935716D3
}
*/

/*
class Netease
{
    id: pos int
    type: audio|alumn=playlist|vedio
    opts: any

    ?{
        crypto: 'weapi', 
        cookie: query.cookie, 
        proxy: query.proxy
    }
}
*/



function aesEncrypt(buffer: Buffer, mode: string, key: Buffer, iv: Buffer) {
  const cipher = crypto.createCipheriv('aes-128-' + mode, key, iv)
  return Buffer.concat([cipher.update(buffer), cipher.final()])
}

console.log(aesEncrypt)