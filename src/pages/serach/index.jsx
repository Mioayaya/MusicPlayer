import React, { memo } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import MioSearchArtist from './c-components/artist-res';
import MioSearchSong from './c-components/songs-res';

import { MioSearchDiv } from './css'

const navArr = ['单曲','歌手','专辑','歌单','用户'];

const MioSearch = memo((props) => {
  const userCounter = useSelector(state => state.userInformSlice.userCounter);
  const [routerData,setRouterData] = useState((location.hash.split('?keywords=')[1]));
  const [active,setActive] = useState(0);  

  useEffect(() => {
    setRouterData(decodeURI(location.hash.split('?keywords=')[1]));    
  },[userCounter,routerData])
  return (
    <MioSearchDiv>
      <div className="title">搜索 {routerData}</div>
      <div className="nav-bar">
        {
          navArr.map((item,index) => {
            return (
              <div className={index==active?'nav active':'nav'} 
                   key={item}
                   onClick={e => setActive(index)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
      {
        active==0
        && <MioSearchSong routerData={routerData} type={1}/>
      }
      {
        active==1
        && <MioSearchArtist routerData={routerData} type={100}/>
      }
      {
        active==2
        && '专辑组件'
      }
      {
        active==3
        && '歌单组件'
      }
      {
        active==4
        && '用户组件'
      }
    </MioSearchDiv>
  )
})

export default MioSearch