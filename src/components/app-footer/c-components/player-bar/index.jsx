import React, { memo,useState  } from 'react'
import { Slider,Message } from '@arco-design/web-react';
import { useDispatch } from 'react-redux';

import { MioFooteerPlayerBarDiv } from './css'
import { useEffect } from 'react';
import { checkSong, getSongUrl } from '../../../../axios/server/playSong';
import { useRef } from 'react';
import calculateTimeLength from '../../../../utils/calculateTimeLength';
import { useCallback } from 'react';
import { setPlayListShow } from '../../../../store/slices/show';
import { setLastPlay, setNextPlay,randPlay } from '../../../../store/slices/play-list';
import getRandNumber from '../../../../utils/getRandNumber';

const playType = ['顺序播放','随机播放','单曲循环','列表循环'];

const MioFooterPlayerBar = memo((props) => {
  const {fee,songId,playlist} = props; 
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);      // 现在的时间
  const [endTime,setEndTime] = useState(0);   // 结束时间
  const [isPlay,setIsPlay] = useState(false); // 是否播放
  const [nowTime,setNowTime] = useState(0);   // 当前时间
  const [mute,setMute] = useState(true);      // 是否静音
  const [volume,setVolume] = useState(20);    // 初始音量
  const [type,setType] = useState(0);         // 播放顺序
  // muted
  // volume
  useEffect(() => {
    getSongUrl(songId).then(res => {
      audioRef.current.src = res.data[0].url;
      // 设置初始音量
      audioRef.current.volume = 0.2;
      setVolume(20);
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
    // 顺序播放 播到最后一首停止
    if(type == 0) {
      if(playlist.p == playlist.pend) {
        audioRef.current.currentTime = 0;
        setNowTime(0);
        setValue(0);
        setIsPlay(false);
      } else {
        dispatch(setNextPlay());
      }
    }else if(type == 1) {
      // 随机播放
      const num = getRandNumber(playlist.length,playlist.p);
      dispatch(randPlay(num));
      
    }else if(type == 2) {
      // 单曲循环
      audioRef.current.currentTime = 0;
      audioRef.current.play().then(res => {
        setIsPlay(true);
      }).catch(err => {
        setIsPlay(false);
      });
      setNowTime(0);
      setValue(0);
    }else if(type == 3) {
      // 列表循环
      dispatch(setNextPlay());
    }
    
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

  const clickMute = () => {
    setMute(!mute);
    mute?audioRef.current.muted=true:audioRef.current.muted=false;
    if(volume == 0) {
      setVolume(20);
      audioRef.current.volume = 0.2;
    }
  }

  const clickSetVolume = (val) => {
    setVolume(val);
    audioRef.current.volume = val/100;
    if(val == 0) {
      setMute(false);
    }else {
      setMute(true);
      audioRef.current.muted = false;
    }
  }

  const onChangeType = () => {
    type == 3 ? setType(0) : setType(type+1);
  }

  const clickLastPlay = () => {
    if(type == 1) {
      const num = getRandNumber(playlist.length,playlist.p);
      dispatch(randPlay(num));
    }else {
      dispatch(setLastPlay())
    }
  }

  const clickNextPlay = () => {
    if(type == 1) {
      const num = getRandNumber(playlist.length,playlist.p);
      dispatch(randPlay(num));
    }else {
      dispatch(setNextPlay())
    }
  }

  return (
    <MioFooteerPlayerBarDiv onKeyDown={e => spaceDown(e)}>
      <div className="top">
        <span className="paly-type" onClick={e => onChangeType()}>
          {playType[type]}
        </span>
        <span className="last" title="上一首" onClick={e => clickLastPlay()}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-shangyishou"></use>
          </svg>
        </span>
        <span className="play-stop" onClick={e => clickPlay()} title={isPlay?'暂停':'播放'}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref={isPlay?'#icon-weibiaoti519':'#icon-bofang1'}></use>
          </svg>
        </span>
        <span className="next" title="下一首" onClick={e => clickNextPlay()}>
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
        <span className="menu-sound" title="音量调节">
          <svg className="icon" aria-hidden="true" onClick={e => clickMute()}>
            <use xlinkHref={mute?'#icon-mn_shengyin':'#icon-jingyin2'}></use>
          </svg>
        <div className="volume-slider">
          <Slider value={volume} 
                  onChange={val => clickSetVolume(val)} 
                  vertical
                  style={{ width: 30}}
                  tooltipVisible={false}
          />
        </div>        
        </span>
        <span className="menu-play-list" title="播放列表" onClick={e => dispatch(setPlayListShow())}>▥</span>
            
      </div>
    </MioFooteerPlayerBarDiv>
  )
})

export default MioFooterPlayerBar