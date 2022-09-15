import React, { memo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getUserInform } from '../../axios/server/usersInform'
import { setOtherUserData } from '../../store/slices/user-inform'
import { MioSpaceUidDiv } from './css'

import MioMineShowTop from '../mine/child-pages/mine-show/child-components/mine-show-top'
import MioMineShowMiddle from '../mine/child-pages/mine-show/child-components/mine-show-middle'
import MioMineShowBottom from '../mine/child-pages/mine-show/child-components/mine-show-bottom'

const MioSpaceUid = memo((props) => {
  const dispatch = useDispatch();
  const otherUserData = useSelector(state => state.userInformSlice.otherUserInform.data);
  const userCounter = useSelector(state => state.userInformSlice.userCounter);
  const theme = useSelector(state => state.themeSlice.theme);
  const [routerData,setRouterData] = useState(Number(location.hash.split('?uid=')[1]))
  const [active,setActive] = useState(16);
  
  useEffect(() => {
    setRouterData(Number(location.hash.split('?uid=')[1]));    
    if(routerData) {
      getUserInform(routerData).then(res => {        
        dispatch(setOtherUserData(res));
      })
    }
  },[userCounter,routerData]);

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
    <MioSpaceUidDiv theme={theme}>
      {
        Object.keys(otherUserData).length
        ? <>
          <MioMineShowTop userOtherInformData={otherUserData}
                          theme={theme}
                          type="other"
          />
          <MioMineShowMiddle active={active}
                             theme={theme}
                             setActive={key => setActive(key)}
          />
          <MioMineShowBottom theme={theme}
                             data={data}
                             uid={routerData}
                             playlistCount={otherUserData.profile.playlistCount}
          />
          </>
        : <div className="loading">loading</div>
      }
    </MioSpaceUidDiv>
  )
})

export default MioSpaceUid