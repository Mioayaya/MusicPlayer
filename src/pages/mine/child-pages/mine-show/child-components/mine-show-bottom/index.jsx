import React, { memo } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getUserPlaylist } from '../../../../../../axios/server/usersInform';
import MioCreatePlaylist from './c-components/create-playlist';

import { MioMineShowBottomDiv } from './css'

// 收藏的歌单就是从 playlistCount 开始
// offset = playlistCount-1
// 不做分页了，上一页下一页;
const MioMineShowBottom = memo((props) => {
  const { data,uid,playlistCount } = props;

  return (
    <MioMineShowBottomDiv>
      { data=='创建歌单' 
        && <MioCreatePlaylist playlistCount={playlistCount} uid={uid}/>
      }
      { data=='收藏歌单' && '收藏歌单'}
      { data=='创建电台' && '创建电台'}
      { data=='收藏电台' && '收藏电台'}
    </MioMineShowBottomDiv>
  )
})

export default MioMineShowBottom