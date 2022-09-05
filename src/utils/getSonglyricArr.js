/**
 * 1. 中文歌
 * 2. 英文歌
 * 3. 日文歌 (罗马音)
 * 4. 纯音乐
 */
export function getSonglyricArr(res) {

  const iricsArry = [];    // 最终对象数组
  const lyricUser = {id: 0,nickname: ''};  // 滚动歌词贡献者
  const transUser = {id: 0,nickname: ''};  // 翻译者

  let lrc = {time: [],value: [],};     // 歌词
  let tlyric = {time: [],value: []};  // 翻译
  let romalrc = {time: [],value: []}; // 罗马音
  let type = 0;     // 0 只有lrc 1 纯音乐 2 lrc+tlyic 3 都有
  const irics = {time: [],lrc: [],tlyric: [],romalrc: [],}
  let arr = [];

  // lrc methods
  arr = res.lrc.lyric.split('\n');
  lrc.time = arr.map(item => item.split(']')[0].slice(1));
  lrc.value = arr.map(item => item.split(']')[1]);
  lrc.value[lrc.value.length-2] == '纯音乐，请欣赏' ? type = 1 : '';
  
  // tlyric methods
  // 理论上 不是纯音乐 就会有翻译了 
  // 中文歌的翻译应该是 空
  let str = '123';
  if(type != 1) {    
    arr = res.tlyric.lyric.split('\n');
    tlyric.time = arr.map(item => item.split(']')[0].slice(1));
    tlyric.value = arr.map(item => item.split(']')[1]);
    str = tlyric.value.join('');
    str == '' ? type = 0 : type = 2;

    // romalrc methods
    if(res.romalrc.lyric) {
      arr = res.romalrc.lyric.split('\n');
      romalrc.time = arr.map(item => item.split(']')[0].slice(1));
      romalrc.value = arr.map(item => item.split(']')[1]);
      type = 3;
    }
  }

  if(res.lyricUser) {
    lyricUser.id = res.lyricUser.userid;
    lyricUser.nickname = res.lyricUser.nickname;
  }
  if(res.transUser) {
    transUser.id = res.transUser.userid;
    transUser.nickname = res.transUser.nickname;
  }

  if(type == 0 || type == 1) {
    irics.time = lrc.time;
    irics.lrc = lrc.value;
  }

  if(type == 2 || type == 3) {
    let p = 0;
    irics.time = lrc.time;
    irics.lrc = lrc.value;
    for(p;p<tlyric.time.length;p++) {
      if(parseInt(tlyric.time[p]) === 0) {
        break;
      }
    }

    for(let i=0;i<irics.time.length;i++) {
      irics.tlyric[i] = '';
      console.log(irics.time[i],tlyric.time[p]);
      if(irics.time[i] == tlyric.time[p]) {
        irics.tlyric[i] = tlyric.value[p];
        p++;
      }
    }
  }

  if(type == 3) {
    let romP = 0;
    let romStart = false;
    for(romP;romP<tlyric.time.length;romP++) {
      if(parseInt(romalrc.time[romP]) === 0) {
        break;
      }
    }

    for(let i=0;i<irics.time.length;i++) {
      irics.romalrc[i] = '';
      if(irics.time[i] == romalrc.time[romP]) {
        romStart = true;
      }
      if(romStart && lrc.value[i] != '') {
        irics.romalrc[i] = romalrc.value[romP];
        romP++;
      }
    }
  }

  // 转换为一个数组

  for(let i =0;i<irics.time.length;i++) {
    const _obj = { 
      time: irics.time[i].split('.')[0],
      lrc: irics.lrc[i] ? irics.lrc[i] : '',
      tlyric: irics.tlyric[i] ? irics.tlyric[i] : '',
      romalrc: irics.romalrc[i] ? irics.romalrc[i] : ''
    };
    
    iricsArry.push(_obj);
  }

  let timeArr = [];
  timeArr = irics.time.map(item => (item.split('.')[0]))

  return {
    iricsArry,
    timeArr,
    lyricUser,
    transUser,
    type
  }
}
