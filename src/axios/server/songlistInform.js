import request from "../axios";

// 获取歌单所有信息  歌单id  限制歌曲的数量 从哪开始截取
export function getTotalSonglist(id,offset,limit) {
  return request({
    url: '/playlist/track/all',
    params: {
      id,
      offset,
      limit,
    }
  })
}

export function getCommentList(id,offset,limit=20) {
  return request({
    url: '/comment/playlist',
    params: {
      id: id,
      offset: offset,
      limit
    }
  })
}