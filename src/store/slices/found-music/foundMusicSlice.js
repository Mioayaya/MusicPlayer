import { createSlice } from "@reduxjs/toolkit";

export const foundMusicSlice = createSlice({
  name: 'foundMusic',
  initialState: {
    topBanners: [],       // 轮播图 数据
    recmdSongList: [],    // 推荐歌单 数据
    songListDetail: '',   // 保存歌单详情数据
    songListId: 0,        // 获取详情歌单信息的歌单id
    activeKey: 10,        // 控制导航栏~
  },
  reducers: {
    // 获取轮播图
    getBanner: (state,{payload}) => {
      // console.log(payload);
      state.topBanners = payload;
    },
    setRecmdSongList: (state, {payload}) => {
      state.recmdSongList = payload;
    }
    ,
    setsongListId: (state, {payload}) => {
      const {id} = payload
      // 首次加载的话
      if(id===0) {
        state.songListId = state.recmdSongList[0].id;
      }else {
        // 否则 点击赋给id 和对应的 index
        state.songListId = id;
      }
    },
    setsongListDetail: (state,{payload}) => {
      state.songListDetail = payload;
    },
    // 点击 navlink
    clickNav: (state,{payload}) => {
      // console.log(payload);
      state.activeKey = payload;
    },
  }
});

export const {getBanner,setRecmdSongList,clickNav,
              setsongListDetail,setsongListId} = foundMusicSlice.actions;
export default foundMusicSlice.reducer;