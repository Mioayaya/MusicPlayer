export default function calculateTimeLength(time) {
  // 毫秒 --> 秒
  let _seconds = Math.floor(Number((time/1000)));
  const _minutes =  fixedTime(Math.floor((_seconds/60)));
  _seconds = fixedTime(_seconds%60);

  return `${_minutes}:${_seconds}`;

  function fixedTime(_time) {
    if(_time<10) return `0${_time}`;
    if(_time>=99) return `99`;
    return _time;
  }
}