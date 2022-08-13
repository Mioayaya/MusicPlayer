import { createSlice } from "@reduxjs/toolkit";


export const songlistSlice = createSlice({
  name: 'theme',
  initialState: {
    songlistInformation: '',
    songlist: [],            // 歌曲列表
    firstLoad: 0,            // 分段加载
    songTotalLength: 0,      // 所有歌曲数目
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
      state.songlist.push(...payload);
    }
  }

});

export const { setSonglistInformation,setSonglist }  = songlistSlice.actions;

export default songlistSlice.reducer;