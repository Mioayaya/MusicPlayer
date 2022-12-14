import { createSlice } from "@reduxjs/toolkit";

export const userInformSlice = createSlice({
  name: 'userInform',
  initialState: {
    // 登录用户的信息
    userInform: {  
      id: 0,
      avatar:'',
      nickname: '', 
    }, 
    // 用户其它信息
    userOtherInform: {
      // 歌单信息
      playlist: {
        playlist: [],        // 创建歌单
        subPlaylist: [],    // 收藏歌单
        recentlist: [],     // 最近播放
        playlistDetail: '',  // 我的歌单详细数据
        songlist: []         // 歌单歌曲数 
      },
      // 基本信息
      data: {

      }
    },
    // 其它用户信息
    otherUserInform: {
      playlist: {
        playlist: [],        // 创建歌单
        subPlaylist: [],    // 收藏歌单
        // 跳到歌单页面即可       
      },
      data: {

      }
    },
    userCounter: 0,     // 路由id变化，但是页面不变化
  },
  reducers: {
    setUserInform: (state,{payload}) => {
      // console.log(payload);
      const { id,avatar,nickname} = payload;
      state.userInform.id = id;
      state.userInform.avatar = avatar;
      state.userInform.nickname = nickname;
    },
    setUserOtherInformData: (state,{payload}) => {
      state.userOtherInform.data = payload;
    },
    setUserPlaylist: (state,{payload}) => {
      const {playlist,subPlaylist} = payload;
      state.userOtherInform.playlist.playlist = playlist;
      state.userOtherInform.playlist.subPlaylist = subPlaylist;
    },
    setUserOtherInformPlaylistDetail: (state,{payload}) => {
      state.userOtherInform.playlist.playlistDetail = payload;
      state.userOtherInform.playlist.songlist = payload.tracks;
    },
    setUserOtherInformSonglist: (state,{payload}) => {
      state.userOtherInform.playlist.songlist.push(payload);
    },
    setOtherUserData: (state,{payload}) => {
      state.otherUserInform.data = payload;
    },
    setUserCounter: (state) => {
      state.userCounter++;
      if(state.userCounter === 100) state.userCounter = 0;
    }
  }

})

export const { setUserInform,setUserOtherInformData,
               setUserPlaylist,setOtherUserData,
               setUserOtherInformPlaylistDetail,
               setUserOtherInformSonglist,
               setUserCounter, } = userInformSlice.actions;

export default userInformSlice.reducer;