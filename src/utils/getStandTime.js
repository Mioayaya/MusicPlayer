export default function getStandTime(time) {
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
  _time = `${_year}年${_month}月${_day}日 ${_hours}:${_minutes}:${_seconds}`;

  return _time;

  function getZero(str) {
    return str.length==1?str='0'+str:str;
  }
}