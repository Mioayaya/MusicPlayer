import { createSlice } from "@reduxjs/toolkit";

export const showSlice = createSlice({
  name: 'show',
  initialState: {
    playListShow: false,
    userLogin: false,
    backgroundUrl: 'https://raften.cn/ayaya/pic/background/madoka.webp',
    opacity: 0.9,
  },
  reducers: {
    setPlayListShow: (state) => {
      state.playListShow = !state.playListShow
    },
    setPlayListShowFalse: (state) => {
      state.playListShow = false;
    },
    setPlayListShowTrue: (state) => {
      state.playListShow = true;
    },
    setUserLogin: (state) => {
      state.userLogin = true;
    },
    setUSerLogout: (state) => {
      state.userLogin = false;
    },
    setBackground: (state,{payload}) => {
      state.backgroundUrl = payload;
    },
    setOpactityL: (state,{payload}) => {
      state.opacity = payload;
    }
  }
})

export const { setPlayListShow,setPlayListShowFalse,
               setPlayListShowTrue,setUserLogin,
               setUSerLogout,setBackground,
               setOpactityL
             } = showSlice.actions;

export default showSlice.reducer;