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