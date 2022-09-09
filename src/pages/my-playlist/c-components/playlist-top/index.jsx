import React, { memo,useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setNavKey } from '../../../../store/slices/content-left';
import calculatePlayNumber from '../../../../utils/calculatePlayNumber';
import getCropImg from '../../../../utils/getCropImg';
import getTime from '../../../../utils/getTime';

import { MioMyPlaylistTopDiv } from './css'

const MioMyPlaylistTop = memo((props) => {
  const {theme,playlist,userInform} = props;
  const coverImgurl = getCropImg(playlist.coverImgUrl,200,200);
  const avatarImgurl = getCropImg(userInform.avatar,30,30);

  const [ show, setShow] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const userClick = () => {
    dispatch(setNavKey(99998));
    history.push({
      pathname: '/mine'
    })
  }


  return (
    <MioMyPlaylistTopDiv theme={theme} show={show}>
      <div className="left">
        <img src={coverImgurl} alt="" />
      </div>
      <div className="right">
        <div className="item-1">
          <span className="icon">歌单</span>
          <div className="title">{playlist.name}</div>
        </div>
        <div className="item-2">
          <img src={avatarImgurl} alt="[]" className="avatar" onClick={e => userClick()}/>
          <span className="author-name" onClick={e => userClick()}>{userInform.nickname}</span>
          <span className="create-time">{getTime(playlist.createTime)+'创建'}</span>
        </div>
        <div className="item-3">
          <span className="play">▷ 播放全部</span>
          <span className="collet">{`收藏(${calculatePlayNumber(playlist.subscribedCount,0)})`}</span>
          <span className="add-list">添加到播放列表</span>
        </div>
        <div className="item-4">
          {
            playlist.name != '我喜欢的音乐' 
            && <div className="tags">
                <span>标签:</span>
                {
                  playlist.tags.length != 0
                  ? 
                    playlist.tags.map((item,index) => {
                      return (
                        <span key={item}>
                          <span className="tags-item">{item}</span>
                          {index!=playlist.tags.length-1 && 
                          <span>/</span>
                          }
                        </span>  
                      )
                    })
                  
                  : <span className="link">添加标签</span>
                }
                
              </div>
          }
          
          <div className="number">
            <span className="song-number">
              <span>歌曲:</span>
              <span className='dark'>{calculatePlayNumber(playlist.trackCount,0)}</span>
            </span>
            <span className="play-number">
              <span>播放:</span>
              <span className='dark'>{calculatePlayNumber(playlist.playCount,0)}</span>
            </span>
          </div>
          {
            playlist.name != '我喜欢的音乐' 
            &&  <div className="desc">
                  <span>简介:</span>
                  {
                    playlist.description
                    ? <span className='dark'>{playlist.description}</span>
                    : <span className="link">添加简介</span>
                  }                  
                  <span className='button' onClick={ e => {setShow(!show)}}>▶</span>
                </div>
          }
          
        </div>
      </div>
    </MioMyPlaylistTopDiv>
  )
})

export default MioMyPlaylistTop