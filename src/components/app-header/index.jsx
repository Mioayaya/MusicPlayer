import React, { memo } from 'react';

import { MioAppHeaderDiv } from './css';
import MioSearchBar from '../base-frame/search-bar';
import MioAvatarBar from '../base-frame/avatar-bar';
import axios from 'axios';
import { getUserStatus } from '../../axios/server/userLogin';
import { useEffect } from 'react';

// 接受一个全局的 redux
const theme = 'dark';

const MioAppHeader = memo(() => {

  useEffect(() => {
    const cookie = localStorage.getItem('cookie');
    const isLogin = sessionStorage.getItem('login');
    // 如果有cookie 并且是未登录的状态
    if(cookie && isLogin!='true') {
      // 设置登录状态
      console.log(233);
      sessionStorage.setItem('cookie',cookie);
      sessionStorage.setItem('login','true');
      const url = getUserStatus(cookie);
      axios.get(url).then(res => {
        sessionStorage.setItem('userId',res.data.data.profile.userId);
        sessionStorage.setItem('userAvatar',res.data.data.profile.avatarUrl);
        sessionStorage.setItem('userNickname',res.data.data.profile.nickname);
      })
    }
  },[])

  return (
    <MioAppHeaderDiv theme={theme}>
      <div className="header-left">
        <div className="header-left-img"></div>
        <span className='header-left-title'>AyayaMusic</span>
        <span className='header-left-last step'>{'<'}</span>
        <span className='header-left-next step'>{'>'}</span>
      </div>
      <div className="header-middle">
        <MioSearchBar />
      </div>
      <div className="header-right">
        <MioAvatarBar />
      </div>
    </MioAppHeaderDiv>
  )
})

export default MioAppHeader