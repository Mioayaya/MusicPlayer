import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';

import routes from '../../router';
import { MioContentDiv } from './css';

import MioContentLeft from '../content-left';

// 接受一个全局的 redux
const theme = 'dark';

const MioContent = memo(() => {
  return (
    <MioContentDiv theme={theme}>
      <div className="content-left scroll">
        <MioContentLeft />
      </div>
      <div className="content-right scroll">
        {renderRoutes(routes)}
      </div>
    </MioContentDiv>
  )
})

export default MioContent