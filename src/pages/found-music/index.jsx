import React, { memo } from 'react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBanner } from '../../store/slices/found-music/foundMusicSlice';
import { getTopBanner } from '../../axios/server/foundMusic';

const MioFoundMusicDiv = styled.div`
  height: 0;
`
const MioFoundMusic = memo(() => {
  const dispatch = useDispatch();

  const foundMusicSlice = useSelector(state => state.foundMusicSlice.topBanners);

  useEffect(() => {
    // 获取轮播图
    getTopBanner().then(res => {
      // res.banners
      // state.topBanners.push(res.banners);
      dispatch(getBanner(res.banners));
    })
  }, [])
  
  return (
    <MioFoundMusicDiv>
      founMusic
    </MioFoundMusicDiv>
  )
})

export default MioFoundMusic