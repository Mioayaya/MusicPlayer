import React, { memo } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'

import { MioSearchDiv } from './css'

import MioSearchBase from './c-components/base-res';
import MioSearchSong from './c-components/songs-res';

const navArr = ['单曲','歌手','专辑','歌单','用户'];

const MioSearch = memo((props) => {
  const userCounter = useSelector(state => state.userInformSlice.userCounter);
  const theme = useSelector(state => state.themeSlice.theme);
  const [routerData,setRouterData] = useState((location.hash.split('?keywords=')[1]));
  const [active,setActive] = useState(0);

  useEffect(() => {
    let key = decodeURI(location.hash.split('?keywords=')[1]);
    setRouterData(key);
  },[userCounter,routerData])
  return (
    <MioSearchDiv theme={theme}>
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
        && <MioSearchBase routerData={routerData} type={100} nameType="歌手"/>
      }
      {
        active==2
        && <MioSearchBase routerData={routerData} type={10} nameType="专辑"/>
      }
      {
        active==3
        && <MioSearchBase routerData={routerData} type={1000} nameType="歌单"/>
      }
      {
        active==4
        && <MioSearchBase routerData={routerData} type={1002} nameType="用户"/>
      }
    </MioSearchDiv>
  )
})

export default MioSearch