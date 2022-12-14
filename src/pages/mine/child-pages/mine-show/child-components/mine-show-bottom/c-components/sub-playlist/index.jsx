import React, { memo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserPlaylist } from '../../../../../../../../axios/server/usersInform';
import MioNormalList from '../normal-list';

import { MioSubPlaylistDiv } from './css'

const MioSubPlaylist = memo((props) => {
  const { uid,playlistCount } = props;
  const [ offset,setOffset ] = useState(playlistCount-1);
  const [ playlistArr,setPlayliseArr ] = useState([]);
  const [ more,setMore ] = useState(false);
  const theme = useSelector(state => state.themeSlice.theme);
  let Limit = 20;

  useEffect(() => {
    if(uid) {
      getUserPlaylist(uid,offset,Limit).then(res => {
        setPlayliseArr(res.playlist);
        setMore(res.more)
      })
    }
  },[uid,offset])

  const preClick = () => {        
    if(offset>=(playlistCount+Limit-1)) {
      setOffset(offset-Limit);
    }
  }

  const nextClick = () => {
    if(more) {
      setOffset(offset+Limit);
    }
  }

  return (
    <MioSubPlaylistDiv theme={theme}>
      {
        playlistArr.length != 0
        ? <MioNormalList playlistArr={playlistArr} uid={uid}/>
        : <div>loading</div>
      }

      {
        playlistArr.length != 0
        &&
        (
          (offset>=playlistCount-1+Limit)
          ? <span className='click' onClick={e => preClick()}>{'<'}</span>
          : <span className='forbid'>{'<'}</span>
        )
      }

      {
        playlistArr.length != 0 
        &&
        (
          (more)
          ? <span className='click' onClick={e => nextClick()}>{'>'}</span>
          : <span className='forbid'>{'>'}</span>
        )
      }
    </MioSubPlaylistDiv>
  )
})


export default MioSubPlaylist