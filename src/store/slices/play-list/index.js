import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
  name: 'playlist',
  initialState: {
    playlist: {
      head: 0,    // 头指针
      p: 0,       // 当前指针
      length: 0 , // 当前链表长度
      idlist: [], // 存放歌曲id列表方便去重
      // 0:{         
      //   last: 0,
      //   next: 0,
      //   me: 0, 
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
        state.playlist[state.playlist.length] = {last,next,me:last+1,value:payload};
        state.playlist.idlist.push(payload.id);
        state.playlist.length++;
        // 设置当前播放
        state.playlist.p = last+1;
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
    }
  }
})

export const {setFirstPlay,setNowPlayUrl,setNextPlayUrl} = playlistSlice.actions;

export default playlistSlice.reducer;