import React, { memo,Suspense } from 'react'
import { renderRoutes } from 'react-router-config';


import routes from '../../router';
import { MioContentDiv } from './css';

import MioContentLeft from '../content-left';
import { useCallback } from 'react';


// 接受一个全局的 redux
const theme = 'dark';

const MioContent = memo(() => {

  // 业务逻辑
  const scrollHandler = useCallback((e) => {
  },[top])

  return (
    <MioContentDiv theme={theme}>
      <div className="content-left scroll">
        <MioContentLeft />
      </div>
      <div className="content-right scroll" 
           onScroll={e => {scrollHandler(e)}}
      >
        <Suspense fallback={<div>loading</div>}>
          {renderRoutes(routes)}
        </Suspense>

        
      </div>
    </MioContentDiv>
  )
})

export default MioContent