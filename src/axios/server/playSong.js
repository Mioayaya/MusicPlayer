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