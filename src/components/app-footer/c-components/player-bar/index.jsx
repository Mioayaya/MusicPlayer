import React, { memo,useState  } from 'react'
import { Slider,Message } from '@arco-design/web-react';

import { MioFooteerPlayerBarDiv } from './css'
import { useEffect } from 'react';
import { checkSong, getSongUrl } from '../../../../axios/server/playSong';
import { useRef } from 'react';
import calculateTimeLength from '../../../../utils/calculateTimeLength';
import { useCallback } from 'react';

const MioFooterPlayerBar = memo((props) => {
  const {fee,songId} = props; 
  const [value, setValue] = useState(0);  // 现在的时间
  const [endTime,setEndTime] = useState(0); // 结束时间
  const [isPlay,setIsPlay] = useState(false); // 是否播放
  const [nowTime,setNowTime] = useState(0);
  // muted
  // volume
  useEffect(() => {
    getSongUrl(songId).then(res => {
      audioRef.current.src = res.data[0].url;
      audioRef.current.volume = 0.5;
      audioRef.current.play().then(res => {
        setIsPlay(true);
      }).catch(err => {
        setIsPlay(false);
      })
      setEndTime(res.data[0].time);
      if(res.data[0].time == 0) {
        Message.warning('亲爱的,暂无版权');
      }
    })
    setValue(0);
    setNowTime(0);
  },[songId])

  useEffect(() => {
    window.addEventListener('keydown',onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown); // 销毁
    };
  },[isPlay])

  const audioRef = useRef();

  // methods 
  const clickPlay = useCallback(() => {
    setIsPlay(!isPlay);
    isPlay ? audioRef.current.pause() : audioRef.current.play().catch(err => {
      setIsPlay(false);
    });
  },[isPlay])

  const onKeyDown = (e) => {
    if(e.keyCode == 32) {
      clickPlay();
    }
  }

  const timeUpdate = (e) => {
    const currentTime = Math.floor(e.target.currentTime);

    if(currentTime-nowTime > 0) {
      setValue(value+1);
      setNowTime(currentTime);
    }

    if(nowTime > currentTime) {
      setNowTime(currentTime);
    }   
  }

  const timeEnded = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play().then(res => {
      setIsPlay(true);
    }).catch(err => {
      setIsPlay(false);
    });
    setNowTime(0);
    setValue(0);
  }

  const changeSlider = (val) => {
    setValue(val);
    audioRef.current.currentTime = val;
    if(isPlay == false) {
      audioRef.current.play().then(err => {
        setIsPlay(true);
      }).catch(err => {
        setIsPlay(false)
      })
    }
  }

  return (
    <MioFooteerPlayerBarDiv onKeyDown={e => spaceDown(e)}>
      <div className="top">
        <span className="paly-type">循环</span>
        <span className="last">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-shangyishou"></use>
          </svg>
        </span>
        <span className="play-stop" onClick={e => clickPlay()}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={isPlay?'#icon-weibiaoti519':'#icon-bofang1'}></use>
          </svg>
        </span>
        <span className="next">
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-xiayishou"></use>
          </svg>
        </span>
        <span className="word">歌词</span>
      </div>
      <div className="bottom">
        {/* 现在时间，防止溢出 */}
        <span className="now-time">{(value<=Math.floor(endTime/1000))?calculateTimeLength(value*1000):calculateTimeLength(endTime)}</span>
        <span className="bar">
          <Slider
            value={value}
            tooltipVisible={false}
            min={0}
            max={Math.floor(endTime/1000)}
            onChange={(val) => changeSlider(val)}
            style={{ width: 500 }}
          />
        </span>
        <span className="end-time">{calculateTimeLength(endTime)}</span>
      </div>

      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={timeEnded}/>

      <div className="menu-list">
        <span className="menu-sound">音量调节</span>
        <span className="menu-play-list">播放列表</span>
      </div>
    </MioFooteerPlayerBarDiv>
  )
})

export default MioFooterPlayerBar