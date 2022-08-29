// 接受一个 播放量 返回 xx万  不足1w直接显示数字
// flag 保留几位数  默认是2
// type = 0 => 万
// type = 1 => w
export default function calculatePlayNumber(number,flag=2,type=0) {
  // 如果 数字小于 10，000 直接返回
  // if(typeof(number)=='undefined'){
  let unit = '万';
  type == 1 ? unit = 'w' : '';

  if(typeof(number)!=='number'){
    return '···';
  }else if(number < 10000) {
    return number;
  }else if(number < 100000000){
    number = number / 10000;
    flag ==0 
      ? number = Math.floor(number)
      : number = number.toFixed(Number(flag));
    return `${number}${unit}`
  }else {
    number = number / 100000000;
    flag ==0 
      ? number = Math.floor(number)
      : number = number.toFixed(Number(flag));
    return `${number}亿`
  }
}
