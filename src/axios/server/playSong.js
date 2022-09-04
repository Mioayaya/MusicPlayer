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