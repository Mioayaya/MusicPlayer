import axios from 'axios';
import React, { memo } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { getSearchRes } from '../../axios/server/search';

import { MioSearchDiv } from './css'

const navArr = ['单曲','歌手','专辑','歌单','用户'];

const MioSearch = memo((props) => {
  const userCounter = useSelector(state => state.userInformSlice.userCounter);
  const [routerData,setRouterData] = useState((location.hash.split('?keywords=')[1]));
  const [active,setActive] = useState(0);
  const [resArr,setResArr] = useState([]);
  const [type,setType] = useState(1);
  const [offset,setOffset] = useState(0);
  const [total,setTotal] = useState(0);

  useEffect(() => {
    setRouterData((location.hash.split('?keywords=')[1]));
    if(routerData) {      
      // axios.get(getSearchRes(routerData,50,offset,10)).then(res => {
      //   console.log(res);
      // })
    }
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
        && '单曲组件'
      }
      {
        active==1
        && '歌手组件'
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