import request from "../axios";
import { baseUrl } from "./userLogin";

// 搜索建议
export function getSearchSuggest(keywords) {
  const url = '/search/suggest';
  return `${baseUrl}${url}?keywords=${keywords}`;
}

// 搜索结果
// limit 默认 100
// 搜索类型；默认为 1 即单曲 , 取值意义 : 
// 1: 单曲, 10: 专辑, 100: 歌手, 1000: 歌单, 1002: 用户, 
// 1004: MV, 1006: 歌词, 1009: 电台, 1014: 视频, 
// 1018:综合, 2000:声音(搜索声音返回字段格式会不一样)
export function getSearchRes(keywords,limit,offset,type) {
  const url = '/cloudsearch';
  return `${baseUrl}${url}?keywords=${keywords}&limit=${limit}&offset=${offset}&type=${type}`;
}