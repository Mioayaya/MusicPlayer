import React, { memo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserPlaylist } from '../../../../../../../../axios/server/usersInform';
import MioNormalList from '../normal-list';

import { MioCreatePlaylistDiv } from './css'

// limit = 20;
const MioCreatePlaylist = memo((props) => {
  const { uid,playlistCount } = props;
  const [ offset,setOffset ] = useState(0);
  const [ playlistArr,setPlayliseArr ] = useState([]);
  const theme = useSelector(state => state.themeSlice.theme);
  let Limit = 20;

  useEffect(() => {
    if(uid) {        
      if(offset == 0) Limit--;
      getUserPlaylist(uid,offset,Limit).then(res => {
        const arr = res.playlist;
        const _arr = arr.filter(item => item.userId == uid);        
        setPlayliseArr(_arr);
        if(offset==0) Limit++
      })
    }
  },[uid,offset])

  const preClick = () => {
    if(offset>=Limit-1) {      
      offset==Limit-1 ? setOffset(0):setOffset(offset-Limit);
    }
  }

  const nextClick = () => {
    if(offset+Limit<playlistCount-1) {              
      offset==0 ? setOffset(offset+Limit-1):setOffset(offset+Limit);
    }
  }

  return (
    <MioCreatePlaylistDiv theme={theme}>
      {
        playlistArr.length != 0
        ? <MioNormalList playlistArr={playlistArr} uid={uid}/>
        : <div>loading</div>
      }

      {
        playlistArr.length != 0
        &&
        ((offset>=Limit-1)
        ? <span className='click' onClick={e => preClick()}>{'<'}</span>
        : <span className='forbid'>{'<'}</span>)
      }

      {
        playlistArr.length != 0
        &&
        ((offset+Limit<playlistCount-1)
        ? <span className='click' onClick={e => nextClick()}>{'>'}</span>
        : <span className='forbid'>{'>'}</span>)
      }
    </MioCreatePlaylistDiv>
  )
})

export default MioCreatePlaylist