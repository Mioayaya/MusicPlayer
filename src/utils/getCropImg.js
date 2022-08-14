// 接受宽高、url,返回裁剪的url 默认 200*200
export default function getCropImg(url,width=200,height=200) {
  return `${url}??param=${width}y${height}`;
}