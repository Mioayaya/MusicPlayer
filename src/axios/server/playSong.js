import request from "../axios";

export function getSongUrl(id) {
  return request({
    url: '/song/url',
    params: {
      id
    }
  })
}

export function checkSong(id) {
  return request({
    url: '/check/music',
    params: {
      id
    }
  })
}

export function getDetailSong(ids) {
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

export function getSonglyric(id) {
  return request({
    url: '/lyric',
    params: {
      id
    }
  })
}

// 获取相似歌曲
export function getSimiSong(id) {
  return request({
    url: '/simi/song',
    params: {
      id
    }
  })
}

// 获取歌曲评论
export function getSongComment(id,offset) {
  return request({
    url: '/comment/music',
    params: {
      id,
      offset
    }
  })
}