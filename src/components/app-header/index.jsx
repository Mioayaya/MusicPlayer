import React, { memo } from 'react';

import { MioAppHeaderDiv } from './css';
import MioSearchBar from '../base-frame/search-bar';
import MioAvatarBar from '../base-frame/avatar-bar';

// 接受一个全局的 redux
const theme = 'dark';

const MioAppHeader = memo(() => {
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