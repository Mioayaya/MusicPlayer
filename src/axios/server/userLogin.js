import request from "../axios";

// export const baseUrl = 'https://cloud-music-ten-iota.vercel.app';
export const baseUrl = 'http://127.0.0.1:3000';

// 获取用户基本信息 uid 头像 昵称
export function getUserStatus(cookie) {
  const url = '/login/status'
  return `${baseUrl}${url}?cookie=${cookie}`;
}

// 获取用户 
export function getUserSubcount(cookie) {
  const url = '/user/subcount';
  return `${baseUrl}${url}?cookie=${cookie}`
}

// 获取二维码图片
export function getQrCreate(key) {
  request({
    url: '/login/qr/create',
    params: {
      key: key,
      qrimg: 1,
    }
  })
}

// 二维码检测
export function QrCheck(key,timestamp) {
  request({
    url: '/login/qr/check',
    params: {
      key: key,
      timestamp: timestamp
    }
  })
}