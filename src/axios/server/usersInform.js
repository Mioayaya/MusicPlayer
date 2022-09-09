///user/subcount

import request from "../axios";

// 获取用户信息
export function getUserInform(uid) {
  return request({
    url: '/user/detail',
    params: {
      uid: uid
    }
    
  })
}

// 获取歌单详情
export function getUserPlaylist(uid,offset,limit=30) {
  return request({
    url: '/user/playlist',
    params: {
      uid:uid,
      offset,
      limit:limit
    },
  })
}

// 最近播放歌曲
export function getUserRecentSong(){
  return request({
    url: '/record/recent/song',
  })
}