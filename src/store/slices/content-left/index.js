import { createSlice } from "@reduxjs/toolkit";

export const contentLeftSlice = createSlice({
  name: 'contentLeft',
  initialState: {
    navKey: 0,   // 控制导航栏
  },
  reducers: {
    setNavKey: (state,{payload}) => {
      state.navKey = payload;
    }
  }
})

export const { setNavKey } = contentLeftSlice.actions;

export default contentLeftSlice.reducer;