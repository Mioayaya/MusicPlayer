import React, { memo,Suspense } from 'react'
import { renderRoutes } from 'react-router-config';
import { useDispatch, useSelector } from 'react-redux';

import routes from '../../router';
import { MioContentDiv } from './css';

import MioContentLeft from '../content-left';
import MioBarPlayList from '../bar-play-list';
import { useCallback } from 'react';
import { setCommentScroll } from '../../store/slices/songlist-inform';


// 接受一个全局的 redux
const theme = 'dark';

const MioContent = memo(() => {
  const dispatch = useDispatch();
  const showPlayList = useSelector(state => state.showSlice.playListShow);

  const homeScroll = useCallback((e) => {
    let flag = false;
    if((e.target.scrollTop+e.target.clientHeight) >= (e.target.scrollHeight-1)) {
      flag = true;
    }
    dispatch(setCommentScroll(flag));
  },[]);

  return (
    <MioContentDiv theme={theme} showPlayList={showPlayList}>
      <div className="content-left scroll">
        <MioContentLeft />
      </div>
      <div className="content-right scroll" onScroll={e => homeScroll(e)}>
        <Suspense fallback={<div>loading</div>}>
          {renderRoutes(routes)}
        </Suspense>        
      </div>
      <div className="play-list scroll">
        <MioBarPlayList />
      </div>
    </MioContentDiv>
  )
})

export default MioContent