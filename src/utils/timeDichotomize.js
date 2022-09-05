
export function timeDichotomize(timeArr,timevalue) {
  if(timeArr.length == 0) return -1;

  let _left = 0;
  let _right = timeArr.length-1;

  while(_left <= _right) {
    let _mid = Math.floor(_left + (_right-_left) / 2) ;
    if(_mid == timeArr.length-1) return _mid-1;
    
    if(timeToNumber(timeArr[_mid]) <= timevalue && timevalue < timeToNumber(timeArr[_mid+1])) {
      console.log(_mid);
      return _mid;
    }else if(timevalue < timeToNumber(timeArr[_mid])) {
      _right = _mid - 1;
    }else {
      _left = _mid + 1;
    }
  }

  return -1;

  function timeToNumber(time) {
    const _minute = parseInt(time.split(':')[0]);
    const _second = parseInt(time.split(':')[1]);
    const _number = _minute * 60 + _second;
    return _number
  }
}