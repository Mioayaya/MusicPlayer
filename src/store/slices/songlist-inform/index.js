import { createSlice } from "@reduxjs/toolkit";


export const songlistSlice = createSlice({
  name: 'theme',
  initialState: {
    songlistInformation: '',
    songlist: [],            // 歌曲列表
    firstLoad: 0,            // 分段加载
    songTotalLength: 0,      // 所有歌曲数目
    authorInform: '',           // 用户信息
  },
  reducers: {
    setSonglistInformation: (state,{payload}) => {
      state.songlistInformation = payload;
      // 同时先加载 10首歌曲 如果有的话
      state.songlist = payload.tracks;
      state.firstLoad = payload.tracks.length;
      // 复制所有歌曲数
      state.songTotalLength = payload.trackIds.length;
    },
    setSonglist: (state,{payload}) => {
      if(payload) state.songlist.push(...payload);
    },
    setAuthorInform: (state,{payload}) => {
      if(payload) {
        const {userId,avatarUrl,nickname} = payload;    
        // console.log(payload);
        state.authorInform = {userId,avatarUrl,nickname};
      }      
    },
    clearAllData: (state) => {
      state.songlistInformation = '';
      state.songlist.length = 0;
      state.firstLoad = 0;
      state.songTotalLength = 0;
      state.authorInform = '';
    }
  }

});

export const { setSonglistInformation,setSonglist,setAuthorInform,clearAllData }  = songlistSlice.actions;

export default songlistSlice.reducer;