// 接受 范围 与 自己
// 返回范围内 不等于自己的随机数
export default function getRandNumber(length,self) {
  let num = Math.floor(Math.random()*length);
  while(num == self) {
    num = Math.floor(Math.random()*length);
  }
  return num;
}