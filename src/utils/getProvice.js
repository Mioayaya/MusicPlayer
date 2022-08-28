import { proviceJson } from "../common/province";

// 根据编码获得省份
export function getProvice(code) {
  const _code = Number(code);
  let provice = '未知';
  const value = proviceJson.findIndex(item => item.c === _code);
  value !== -1 ? provice = proviceJson[value].n.split('(')[0] : provice = '未知';
  return provice;
}