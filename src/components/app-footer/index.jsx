import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import MioFooterPlayerBar from './c-components/player-bar';

import { MioFooterDiv } from './css';

const MioAppFooter = memo(() => {
  const theme = useSelector(state => state.themeSlice.theme);
  const playlist = useSelector(state => state.playlistSlice.playlist);

  return (
    <MioFooterDiv theme={theme}>
      {
        playlist[playlist.p] 
        ? <div className="left">
            <div className="avatar">
              <img src={playlist[playlist.p].value.al.picUrl} alt="" />
            </div>
            <div className="desc">
              <span className="top">
                <span className="title">{playlist[playlist.p].value.name}</span>
                <span className="icon">❤</span>
              </span>
              <span className="author">
                {
                  playlist[playlist.p].value.ar.map((item,index) => {
                    return (
                      <>
                        <span>{item.name}</span>
                        { index!==playlist[playlist.p].value.ar.length-1 && <span>/</span>}
                      </>                      
                    )
                  })
                }
              </span>          
            </div>
          </div>
        : <div className="left">loading</div>
      }
      
      <div className="player">
        {
          playlist[playlist.p] 
          && 
          <MioFooterPlayerBar fee={playlist[playlist.p].value.fee} 
                              songId={playlist[playlist.p].value.id}
                              playlist={playlist}
          />
        }
        
      </div>

      <div className="right">      
      </div>
    </MioFooterDiv>
  )
})

export default MioAppFooter