import React, { memo } from 'react'
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import MioFoundMusicBannar from '../../../../components/base-frame/bannar';
import MioRecmdSongList from './c-components/recmd-song-list';
import { clickNav } from '../../../../store/slices/found-music/foundMusicSlice';
import { useEffect } from 'react';
// 个性推荐

const MioFoundMusicRecommendDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  word-break: break-all;
`

const MioFoundMusicRecommend = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clickNav(10));
  }, [])
  

  return (
    <MioFoundMusicRecommendDiv>
      {/* 轮播组件 */}
      <MioFoundMusicBannar />
      
      {/* 推荐歌单组件 */}
      <MioRecmdSongList />
    </MioFoundMusicRecommendDiv>
  )
})

export default MioFoundMusicRecommend