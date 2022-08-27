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
        playlist:'',
        subPlaylist: ''
      },
      // 基本信息
      data: {

      }
    },
    // 其它用户信息
    otherUserInform: ''
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
    }
  }

})

export const { setUserInform,setUserOtherInformData } = userInformSlice.actions;

export default userInformSlice.reducer;