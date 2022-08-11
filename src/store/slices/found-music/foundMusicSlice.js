import { createSlice } from "@reduxjs/toolkit";
import { getTopBanner } from "../../../axios/server/foundMusic";

export const foundMusicSlice = createSlice({
  name: 'foundMusic',
  initialState: {
    topBanners: [],
  },
  reducers: {
    // 获取轮播图
    getBanner: (state,{payload}) => {
      // console.log(payload);
      state.topBanners = payload;
    },
  }
});

export const {getBanner} = foundMusicSlice.actions;
export default foundMusicSlice.reducer;