import React, { memo, useEffect, useState,useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDetailSong, getSimiSong } from '../../../../axios/server/playSong';
import { setFirstPlay, setPlayListId, setSongInformShow } from '../../../../store/slices/play-list';
import MioSongDetailIrics from '../c-components/irics-list';

import { MioSongDetailNormalTopDiv } from './css'

const MioSongDetailNormalTop = memo((props) => {
  const {theme,playlist} = props;  
  const dispatch = useDispatch();
  const aniPlay = useSelector(state => state.playlistSlice.play);
  const [simiList,setSimiList] = useState([]);

  useEffect(() => {
    if(playlist[playlist.p]) {
      getSimiSong(playlist[playlist.p].value.id).then(res => {
        setSimiList(res.songs)
      })
    }
  },[playlist])

  const simiClick = (id) => {
    getDetailSong(id).then(res => {      
      dispatch(setFirstPlay(res.songs[0]));
    })
  }

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
          {
            simiList.length
            ? <>
                <div className="simi-desc" title='双击播放'>相似推荐</div>
                {
                  simiList.map(item => (
                    <div className="item-simi" 
                         onDoubleClick={e => simiClick(item.id)}
                         title={item.name}     
                    >
                      <div className="pic">
                        <img src={item.album.picUrl} alt="" />
                      </div>
                      <div className="name">{item.name}</div>
                    </div>
                  ))
                }
              </>
            : ''
          }
        </div>

      </div>
    </MioSongDetailNormalTopDiv>
  )
})

export default MioSongDetailNormalTop