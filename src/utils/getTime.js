// 第二个参数 返回的形式
// 0 返回 2022-08-12
// 1 返回 2022-08-12 19
// 2 返回 2022-08-12 19:13
// 3 返回 2022-08-12 19:13:24
// 4 返回 19:13
// 5 返回 12

export default function getTime(time,flag = 0,crop='-') {
  let t = new Date(time).toLocaleString(); 
  // xxxx/x/x xx:xx:xx
  let _year = getZero(t.split('/')[0]);
  let _month = getZero(t.split('/')[1]);

  // 将 t 切成 x xx:xx:xx
  t = t.split('/')[2];
  let _day = getZero(t.split(' ')[0]);
  // 时间
  t = t.split(' ')[1];
  let _hours = getZero(t.split(':')[0]);
  let _minutes = getZero(t.split(':')[1]);
  let _seconds = getZero(t.split(':')[2]);

  let _time = '';

  switch(flag) {
    case 0|'0' : _time = `${_year}${crop}${_month}${crop}${_day}`;break;
    case 1|'1' : _time = `${_year}${crop}${_month}${crop}${_day} ${_hours}`;break;
    case 2|'2' : _time = `${_year}${crop}${_month}${crop}${_day} ${_hours}:${_minutes}`;break;
    case 3|'3' : _time = `${_year}${crop}${_month}${crop}${_day} ${_hours}:${_minutes}:${_seconds}`;break;
    case 4|'4' : _time = `${_hours}:${_minutes}`;break;
    case 5|'5' : _time = _day;break;
    default: _time = `${_year}${crop}${_month}${crop}${_day} ${_hours}:${_minutes}`;break;
  }
  return _time; 

  function getZero(str) {
    return str.length==1?str='0'+str:str;
  }
}