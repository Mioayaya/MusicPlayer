import request from "../axios";

export function getTopBanner() {
  return request({
    url: "/banner"
  })
}