import React, { memo,Suspense } from 'react'
import { renderRoutes } from 'react-router-config';
import { useSelector } from 'react-redux';

import routes from '../../router';
import { MioContentDiv } from './css';

import MioContentLeft from '../content-left';
import MioBarPlayList from '../bar-play-list';


// 接受一个全局的 redux
const theme = 'dark';

const MioContent = memo(() => {
  const showPlayList = useSelector(state => state.showSlice.playListShow);

  return (
    <MioContentDiv theme={theme} showPlayList={showPlayList}>
      <div className="content-left scroll">
        <MioContentLeft />
      </div>
      <div className="content-right scroll">
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