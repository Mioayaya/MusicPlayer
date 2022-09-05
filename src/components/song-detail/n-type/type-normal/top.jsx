import React, { memo, useEffect, useState,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSongInformShow } from '../../../../store/slices/play-list';
import MioSongDetailIrics from '../c-components/irics-list';

import { MioSongDetailNormalTopDiv } from './css'

const MioSongDetailNormalTop = memo((props) => {
  const {theme,playlist} = props;  
  const dispatch = useDispatch();
  const aniPlay = useSelector(state => state.playlistSlice.play);  

  return (
    <MioSongDetailNormalTopDiv theme={theme} aniPlay={aniPlay}>
      <div className="top-tools">
        <div className="down" onClick={e => dispatch(setSongInformShow(false))} title="收起音乐详情">﹀</div>        
      </div>
      
      <div className="title">
        <div className="song-name">{playlist[playlist.p].value.name.split('(')[0]}</div>
        <div className="song-name-desu">{playlist[playlist.p].value.name.split('(')[1]?playlist[playlist.p].value.name.split('(')[1].split(')')[0]:''}</div>
        <span className="song-author">
          {
            playlist[playlist.p].value.ar.map((item,index,arr) => {
              return(
                <span key={item.name}>
                  <span className="ar">{item.name}</span>
                  <span>{index!=arr.length-1?'/':''}</span>
                </span>
              ) 
            })
          }
        </span>
        <span className="al">{playlist[playlist.p].value.al.name}</span>            
      </div>
      <div className="top-content">
        <div className="content-pic">
          <div className="pic">
            <img src={playlist[playlist.p].value.al.picUrl} alt="" />
          </div>
        </div>

        <div className="content-iyrics">          
          <MioSongDetailIrics />        
        </div>

        <div className="content-others">
          其它
        </div>
      </div>
    </MioSongDetailNormalTopDiv>
  )
})

export default MioSongDetailNormalTop