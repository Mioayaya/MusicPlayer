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