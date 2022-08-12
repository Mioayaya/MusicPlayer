// 接受一个 播放量 返回 xx万  不足1w直接显示数字

export default function calculatePlayNumber(number) {
  // 如果 数字小于 10，000 直接返回
  if(number < 10000) {
    return number;
  }else {
    number = number / 10000;
    number = number.toFixed(2);
    return `${number}万`
  }
}
