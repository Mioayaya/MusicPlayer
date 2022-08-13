import request from "../axios";

// 获取歌单所有信息  歌单id  限制歌曲的数量 从哪开始截取
export function getTotalSonglist(id,limit,offset) {
  return request({
    url: '/playlist/track/all',
    params: {
      id,
      limit,
      offset
    }
  })
}