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
      
      {/* 最新音乐 */}
      <div>最新音乐</div>

      {/* 推荐MV */}
      <div>推荐MV</div>
      
      {/* 热门播客 */}
      <div>热门播客</div>

      {/* 独家放送 */}
      <div>独家放送</div>

      {/* 主题播客 */}
      <div>主题播客</div>


    </MioFoundMusicRecommendDiv>
  )
})

export default MioFoundMusicRecommend