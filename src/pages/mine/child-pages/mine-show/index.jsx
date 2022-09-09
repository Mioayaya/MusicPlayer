import React, { memo } from 'react'
import { useState } from 'react';

import { MioMineShowDiv } from './css'

import MioMineShowTop from './child-components/mine-show-top';
import MioMineShowMiddle from './child-components/mine-show-middle';
import MioMineShowBottom from './child-components/mine-show-bottom';
import { useMemo } from 'react';

const MioMineShow = memo((props) => {
  const {userOtherInformData,theme,startSetShow,uid} = props;
  
  // hooks
  const [active,setActive] = useState(16);
  
  const data = useMemo(() => {
    let _data = '创建歌单';
    switch(active) {
      case 16: _data = '创建歌单'; break;
      case 17: _data = '收藏歌单'; break;
      case 18: _data = '创建电台'; break;
      case 19: _data = '收藏电台'; break;
    }
    return _data;
  },[active])
  return (
    <MioMineShowDiv theme={theme}>
      {
        Object.keys(userOtherInformData).length 
        ? <>
            <MioMineShowTop userOtherInformData={userOtherInformData} 
                            theme={theme}
                            startSetShow={e => startSetShow()}
                            type="mine"
            />
            <MioMineShowMiddle active={active}
                               theme={theme}
                               setActive={ key => setActive(key)}
            />
            <MioMineShowBottom theme={theme}
                                data={data}
                                uid={uid}
                                playlistCount={userOtherInformData.playlistCount}
            />
          </>
        : <div className="loading">loading</div>
      }
    </MioMineShowDiv>
  )
})

export default MioMineShow