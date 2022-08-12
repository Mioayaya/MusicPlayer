import React, { memo } from 'react'
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';

import { clickNav } from '../../../../store/slices/found-music/foundMusicSlice';
import { useEffect } from 'react';

import MioFoundMusicBannar from '../../../../components/base-frame/bannar';
import MioRecmdSongList from './c-components/recmd-song-list';
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
      <div className="div">123</div>
    </MioFoundMusicRecommendDiv>
  )
})

export default MioFoundMusicRecommend