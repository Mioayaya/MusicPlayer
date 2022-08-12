import request from "../axios";

// 获取轮播图
export function getTopBanner() {
  return request({
    url: "/banner"
  })
}

// 获取推荐列表(未登录状态)  limit 是拉取的数量
export function getPersonalized(limit) {
  return request({
    url: "/personalized",
    params: {
      limit,
    }
  })
}

// 获取歌单详细信息，每首歌的信息等
export function getSonglistDetail(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    }
  })
}