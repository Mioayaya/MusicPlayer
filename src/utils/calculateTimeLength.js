export default function calculateTimeLength(time) {
  // 毫秒 --> 秒
  let _seconds = Number((time/1000).toFixed(0));
  const _minutes =  fixedTime(Number((_seconds/60).toFixed(0)));
  _seconds = fixedTime(_seconds%60);

  return `${_minutes}:${_seconds}`;

  function fixedTime(_time) {
    if(_time<10) return `0${_time}`;
    if(_time>=99) return `99`;
    return _time;
  }
}