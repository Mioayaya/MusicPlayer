import request from "../axios";
import { baseUrl } from "./userLogin";

// 搜索建议
export function getSearchSuggest(keywords) {
  const url = '/search/suggest';
  return `${baseUrl}${url}?keywords=${keywords}`;
}