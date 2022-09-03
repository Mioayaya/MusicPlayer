import React, { memo,useState } from 'react'
import { useDispatch } from 'react-redux';
import { setSongInformShow } from '../../../../store/slices/play-list';

import { MioFooterCardNativeDiv } from './css'

const MioFooterCardNative = memo((props) => {
  const {theme,playlist,cardShow,setCardShow} = props;
  const [notclick,setNotClick] = useState(false);
  const dispatch = useDispatch();

  // methods
  const showSongDetail = () => {
    if(!notclick) {
      setCardShow(!cardShow);
      dispatch(setSongInformShow());
      setNotClick(true);
      setTimeout(() => {
        setNotClick(false);
      },1500)
    }  
  }

  return (
    <MioFooterCardNativeDiv theme={theme} cardShow={cardShow}>
      <div className="avatar">
        <img src={playlist[playlist.p].value.al.picUrl} alt="" />
        <span className="up" onClick={e => showSongDetail()}>^</span>
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
    </MioFooterCardNativeDiv>
  )
})

export default MioFooterCardNative