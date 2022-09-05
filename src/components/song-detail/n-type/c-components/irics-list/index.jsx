import React, { memo, useEffect } from 'react'
import { useState } from 'react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getSonglyric } from '../../../../../axios/server/playSong';
import { setIricsInform } from '../../../../../store/slices/play-list';
import calculateTimeLength from '../../../../../utils/calculateTimeLength';
import { getSonglyricArr } from '../../../../../utils/getSonglyricArr';
import { timeDichotomize } from '../../../../../utils/timeDichotomize';

import { MioSongDetailIricsDiv } from './css'

const MioSongDetailIrics = memo((props) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeSlice.theme);
  const playlist = useSelector(state => state.playlistSlice.playlist);
  const iricsInform = useSelector(state => state.playlistSlice.iricsInform);
  const nowTime = useSelector(state => state.playlistSlice.nowTime);
  const [activeP,setActiveP] = useState(0); 

  useEffect(() => {
    if(playlist[playlist.p]) {
      getSonglyric(playlist[playlist.p].value.id).then(res => {
        dispatch(setIricsInform(getSonglyricArr(res)));
      })
    }
  },[playlist])

  useEffect(() => {
    // time[0]  time[1]  time[2]
    // activeP  
    // nowtime -->  time[2] < nowtime < time[1]
    if(iricsInform.timeArr.length) {
      const p = timeDichotomize(iricsInform.timeArr,nowTime);
      setActiveP(p);      
    }
  },[iricsInform,nowTime])

  return (
    <MioSongDetailIricsDiv theme={theme}>
      <div className="shadow shadow-top"></div>
      <div className="shadow shadow-bottom"></div>
        { iricsInform.irics.length ? iricsInform.irics[activeP].time : ''}
      <div className="lyric-list">
        {
          // lrc == '' 
          // only lrc
          // 译 lrc + tlyric 
          // 罗马音
          iricsInform.irics.map((item,index) => (            
            <span className="item-sentence">              
              {
                item.lrc == '' 
                ? <div className="item-main">
                    <span className="item-time">{item.time}</span>
                    <div className="space"></div>
                  </div>
                : <>  
                  <span className="item-main">
                    <span className="item-time">{item.time}</span>
                    <span className="item-lrc">{item.lrc}</span>
                  </span>
                  <span className="item-tlyric">{item.tlyric}</span>
                  <span className="item-romalrc">{item.romalrc}</span>                
                  </>
              }
              
            </span>
          ))
        }
      </div>
    </MioSongDetailIricsDiv>
  )
})

export default MioSongDetailIrics