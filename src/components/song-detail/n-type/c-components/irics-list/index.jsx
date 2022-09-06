import React, { memo, useEffect } from 'react'
import { useCallback } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getSonglyric } from '../../../../../axios/server/playSong';
import { setIricsInform, setIricsNowTime, setNowTimeClick } from '../../../../../store/slices/play-list';
import calculateTimeLength from '../../../../../utils/calculateTimeLength';
import { getSonglyricArr } from '../../../../../utils/getSonglyricArr';
import { timeDichotomize, timeToNumber } from '../../../../../utils/timeDichotomize';

import { MioSongDetailIricsDiv } from './css'

const MioSongDetailIrics = memo((props) => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeSlice.theme);
  const playlist = useSelector(state => state.playlistSlice.playlist);
  const iricsInform = useSelector(state => state.playlistSlice.iricsInform);
  const nowTime = useSelector(state => state.playlistSlice.nowTime);
  const [activeP,setActiveP] = useState(0); 
  const [isScroll,setIsscroll] = useState(false);
  const [isTly,setIsTly] = useState(0);
  const [isRom,setIsRom] = useState(0);
  const [onScrollP,setonScrollP] = useState(-1);
  const listRef = useRef();

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
  },[iricsInform,nowTime,isScroll])

  useEffect(() => {
    if(iricsInform.type == 0 || iricsInform.type == 1) {
      setIsTly(0);
    }else {
      setIsTly(1);
    }
  },[iricsInform])

  useEffect(() => {
    if(!isScroll) {      
      listRef.current.scrollTo({top: itemHeight*activeP, behavior: 'smooth'})
      // listRef.current.scrollTop = 72 * activeP;
    }
  },[activeP,nowTime])

  const itemHeight = useMemo(() => {
    return 20+26*(1+isTly+isRom);
  },[isTly,isRom])

  const onListScroll = useCallback((e) => {
    setIsscroll(true);
    // 单行模式
    if((isTly+isRom)==0) {
      const line = Math.ceil((e.target.scrollTop)/46);
      setonScrollP(line);      
    }else if((isTly+isRom)==1) {
      const line = Math.ceil((e.target.scrollTop)/72); // 10*2 + (16+10)*2
      setonScrollP(line);
    }else {
      const line = Math.ceil((e.target.scrollTop)/98);
      setonScrollP(line);
    }

    setTimeout(() => {
      setIsscroll(false);
    },2000);
  },[nowTime,activeP])

  const startNow = () => {
    const nowTime = iricsInform.irics[onScrollP].time;
    dispatch(setIricsNowTime(timeToNumber(nowTime)));
    dispatch(setNowTimeClick());
  }

  return (
    <MioSongDetailIricsDiv theme={theme} 
                           isTly={isTly} 
                           isRom={isRom} 
                           ref={listRef}
                           onScroll={e => onListScroll(e)} 
    >
      <div className="shadow shadow-top"></div>
      <div className="shadow shadow-bottom"></div>
      <div className="btn">
        {iricsInform.type==2|iricsInform.type==3 ? <div className={isTly==1? 'tly active':'tly'} onClick={e => setIsTly(isTly==0?1:0)}>译</div>:''}
        {iricsInform.type==3 ? <div className={isRom==1? 'rom active':'rom'} onClick={e => setIsRom(isRom==0?1:0)}>音</div> : ''}
      </div>
      <div className="on-scroll-active">
        <span className="item-time">{iricsInform.irics[onScrollP] && iricsInform.irics[onScrollP].time}</span>
        <div className="line-left"></div>
        <div className="line-right"></div>
        <div className="start-now" onClick={e => startNow()}>▶</div>
      </div>

      <div className="lyric-list">
        <div className="top-space"></div>
        {
          // lrc == '' 
          // only lrc
          // 译 lrc + tlyric 
          // 罗马音          
          iricsInform.irics.map((item,index) => (            
            <span className={index==activeP|index==onScrollP?'item-sentence active':'item-sentence'}>
              {
                item.lrc == ''                 
                ? <>
                    <div className="item-main item-height">
                      <div className="space"></div>                    
                    </div>
                    {isTly==1 && <div className="space item-height"></div>}
                    {isRom==1 && <div className="space item-height"></div>}
                  </>
                
                : <>  
                  <span className="item-main item-height">
                    <span className="item-lrc">{item.lrc}</span>
                  </span>
                  {isTly==1 && <span className="item-tlyric item-height">{item.tlyric}</span>}
                  {isRom==1 && <span className="item-romalrc item-height">{item.romalrc}</span>}                  
                  </>
              }              
            </span>
          ))
        }
        <div className="top-space"></div>
      </div>
    </MioSongDetailIricsDiv>
  )
})

export default MioSongDetailIrics