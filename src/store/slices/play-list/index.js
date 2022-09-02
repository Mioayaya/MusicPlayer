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
    songInform: {
      nowPlayUrl: '' , // 当前播放资源
      nextPlayUrl: '', // 下一首播放 防抖
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
    // 传入歌曲url
    setNowPlayUrl: (state,{payload}) => {
      state.songInform.nowPlayUrl = payload;
    },
    // 传入下一首播放的url
    setNextPlayUrl: (state,{payload}) => {
      state.songInform.nextPlayUrl = payload;
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
      // 如果当前目标靠近尾指针  从下往上找
      if(state.playlist.pend-payload < (payload-state.playlist.phead)) {        
        let current = state.playlist.pend;
        while(state.playlist[current].fix != payload || current > payload) {
          current = state.playlist[current].last;
        }
        state.playlist.p = state.playlist[current].me;        
      }else {
        // 从上往上找
        let current = state.playlist.phead;
        while(state.playlist[current].fix != payload || current < payload) {
          current = state.playlist[current].next;
        }
        // 没找到就是在附近取 
        state.playlist.p = state.playlist[current].me; 
      }
    }
  }
})

export const {setFirstPlay,setNowPlayUrl,setNextPlayUrl,
              setPlayListId,clearAllData,setLastPlay,
              setNextPlay,randPlay
             } = playlistSlice.actions;

export default playlistSlice.reducer;