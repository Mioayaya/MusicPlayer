import { createSlice } from "@reduxjs/toolkit";
import { getTopBanner } from "../../../axios/server/foundMusic";

export const foundMusicSlice = createSlice({
  name: 'foundMusic',
  initialState: {
    topBanners: [],       // 轮播图 数据
    recmdSongList: [],    // 推荐歌单 数据
    activeKey: 10
  },
  reducers: {
    // 获取轮播图
    getBanner: (state,{payload}) => {
      // console.log(payload);
      state.topBanners = payload;
    },
    getRecmdSongList: (state, {payload}) => {
      state.recmdSongList = payload;
    }
    ,
    // 点击 navlink
    clickNav: (state,{payload}) => {
      // console.log(payload);
      state.activeKey = payload;
    },
  }
});

export const {getBanner,getRecmdSongList,clickNav} = foundMusicSlice.actions;
export default foundMusicSlice.reducer;