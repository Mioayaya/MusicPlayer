import request from "../axios";

// 获取二维码key
export function getQrKey() {
  request({
    url: '/login/qr/key'
  })
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