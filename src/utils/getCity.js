import { cityJson } from "../common/city";

// 根据编码获得 城市
export function getCity(code) {
  
  const _code = Number(code);
  let provice = '未知';
  const value = cityJson.findIndex(item => item.c === _code);
  value !== -1 ? provice = cityJson[value].n : provice = '未知';
  return provice;
}