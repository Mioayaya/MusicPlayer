/**
 * 1. 中文歌
 * 2. 英文歌
 * 3. 日文歌 (罗马音)
 * 4. 纯音乐
 */
export function getSonglyricArr(res) {
  // 滚动歌词贡献者
  const lyricUser = {
    id: 0,
    nickname: ''
  };   
  // 翻译贡献值
  const transUser = {
    id: 0,
    nickname: ''
  };

  let lrc = {
    time: [],
    value: [],
  };     // 歌词
  let tlyric = {
    time: [],
    value: []
  };  // 翻译
  let romalrc = {
    time: [],
    value: []
  }; // 罗马音
  let type = 0;     // 0 只有lrc 1 纯音乐 2 lrc+tlyic 3 都有
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

  return {
    lrc,
    tlyric,
    type,
    romalrc,
    lyricUser,
    transUser
  }
}