import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    playlist: {
      phead: 0,    // 头指针
      pend: 0,     // 尾指针
      p: 0,       // 当前指针
      length: 0 , // 当前链表长度
      idlist: [], // 存放歌曲id列表方便去重
      // 0:{         
      //   last: 0,
      //   next: 0,
      //   me: 0, 
      //   fix: 0,  // 修正后
      //   value: '',
      // }
    }, 
    play: false,  // 播放?暂停
    nowTime: 0,   // 当前播放时间
    songInform: {
      word: '',         // 歌词
      show: false,      // 展示详情
      showType: 0,      // 模式
    },
    iricsInform: {
      irics: [
        // time:    // 当前时间
        // lrc:     // 主歌词
        // tlyric： // 翻译
        // romalrc： // 罗马音
      ],
      lyricUser: {
        id: 0,
        nickname: ''
      } ,// 滚动歌词贡献者
      transUser: {
        id: 0,
        nickname: ''
      },// 翻译者
    }
    
  },
  reducers: {
    // 将传入的歌曲设置为当前播放，并且是第一个
    setFirstPlay: (state,{payload}) => {
      let last = -1;
      let next = -1;
      
      const meIndex = state.playlist.idlist.indexOf(payload.id);
      // 已经存在?
      if( meIndex != -1) {
        // 设置为当前播放
        state.playlist.p = meIndex;
      }else {
        // 不存在
        state.playlist.length == 0 ? last = -1 : last = state.playlist.length-1;
        state.playlist[state.playlist.length] = {last,next,me:last+1,fix:last+1,value:payload};
        state.playlist.idlist.push(payload.id);
        state.playlist.length++;
        // 设置当前播放
        state.playlist.p = last+1;
        state.playlist.pend = state.playlist.length-1; 
      }

      // 上一个存在的话
      if(state.playlist[last]) {
        state.playlist[last].next = state.playlist.p;
      }
      
    },
    // 播放列表里 播放
    setPlayListId: (state,{payload}) => {
      const meIndex = state.playlist.idlist.indexOf(payload);
      state.playlist.p = meIndex;
    },
    // 清空
    clearAllData: (state) => {
      state.playlist = '';
      state.playlist = {
        phead: 0,    // 头指针
        pend: 0,    // 尾指针
        p: 0,       // 当前指针
        length: 0 , // 当前链表长度
        idlist: [], // 存放歌曲id列表方便去重
      }
    },
    // 上一首歌
    setLastPlay: (state) => {
      // 如果存在上一首
      if(state.playlist[state.playlist.p].last != -1) {
        state.playlist.p = state.playlist[state.playlist.p].last;
      }else {
        // 否则最后一首
        state.playlist.p = state.playlist.pend;        
      }
    },
    setNextPlay: (state) => {
      // 如果存在下一首
      if(state.playlist[state.playlist.p].next != -1) {
        state.playlist.p = state.playlist[state.playlist.p].next;
      }else {
        // 否则是第一首
        state.playlist.p = state.playlist.phead;
      }
    },
    randPlay: (state,{payload}) => {
      state.playlist.p = payload;
    },
    delSingelSong: (state,{payload}) => {
      // 首先判断一下是否在播放
      if(state.playlist.p != -1) {
        if(state.playlist[state.playlist.p].value.id == payload) {
          // 首先判断是不是只有一首
          if(state.playlist.length == 1) {
            state.playlist.p = -1;
          }else if(state.playlist.p == state.playlist.pend) {
            // 判断是不是最后一首
            // 是的话播放上一首
            state.playlist.p--;
          }else {
            // 否则播放下一首
            state.playlist.p++;
          }
          
        }
      }
      
      if(state.playlist[0].value.id == payload) {
        state.playlist.idlist.shift();
        for(let i=0;i<state.playlist.length-1;i++) {          
          state.playlist[i].value = state.playlist[i+1].value;
        }
        state.playlist[state.playlist.pend] = null;
        state.playlist.pend--;
        state.playlist.length--;
        state.playlist.p--;
      }else if(state.playlist[state.playlist.pend].value.id == payload) {
        // 最后一个 
        // 直接 length-- pend-- =null
        state.playlist.idlist.pop();
        state.playlist[state.playlist.pend] = null;
        state.playlist.pend--;
        state.playlist.length--;
      }else {
        const meIndex = state.playlist.idlist.indexOf(payload);
        state.playlist.idlist.splice(meIndex,1);
        for(let i=meIndex;i<state.playlist.length-1;i++) {
          state.playlist[i].value = state.playlist[i+1].value;
        }
        state.playlist[state.playlist.pend] = null;
        state.playlist.length--;
        state.playlist.pend--;
        if(state.playlist.p > meIndex) state.playlist.p--;
      }
    },
    setSongInformShow: (state,{payload}) => {
      state.songInform.show = payload;
    },
    setPlayPause: (state,{payload}) => {
      state.play = payload;
    }
  }
})

export const {setFirstPlay,setNowPlayUrl,setNextPlayUrl,
              setPlayListId,clearAllData,setLastPlay,
              setNextPlay,randPlay,delSingelSong,
              setSongInformShow,setPlayPause
             } = playlistSlice.actions;

export default playlistSlice.reducer;