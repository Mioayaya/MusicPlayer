import React, { memo } from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setNavKey } from '../../../../store/slices/content-left';

import calculatePlayNumber from '../../../../utils/calculatePlayNumber';
import getCropImg from '../../../../utils/getCropImg';
import getTime from '../../../../utils/getTime';

import { MioSonglistTopDiv } from './css'

const MioSonglistTop = memo((props) => {
  const { songlistInformation,theme,authorInform } = props;
  const coverImgurl = getCropImg(songlistInformation.coverImgUrl,200,200);
  const avatarImgurl = getCropImg(authorInform.avatarUrl,30,30);
  
  const [ show, setShow] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const userClick = (uid) => {
    dispatch(setNavKey(99998));
    history.push({
      pathname: '/spaceuid',
      search: `?uid=${uid}`
    });
  }

  return (
    <MioSonglistTopDiv theme={theme} show={show}>
      <div className="left">
        <img src={coverImgurl} alt="" />
      </div>
      <div className="right">
        <div className="item-1">
          <span className="icon">歌单</span>
          <div className="title">{songlistInformation.name}</div>
        </div>
        <div className="item-2">
          <img src={avatarImgurl} alt="[]" className="avatar" onClick={e => userClick(authorInform.userId)}/>
          <span className="author-name" onClick={e => userClick(authorInform.userId)}>{authorInform.nickname}</span>
          <span className="create-time">{getTime(songlistInformation.createTime)+'创建'}</span>
        </div>
        <div className="item-3">
          <span className="play">▷ 播放全部</span>
          <span className="collet">{`收藏(${calculatePlayNumber(songlistInformation.subscribedCount,0)})`}</span>
          <span className="add-list">添加到播放列表</span>
        </div>
        <div className="item-4">
          <div className="tags">
            <span>标签:</span>
            {
              songlistInformation.tags.map((item,index) => {
                return (
                  <span key={item}>
                    <span className="tags-item">{item}</span>
                    {index!=songlistInformation.tags.length-1 && 
                     <span>/</span>
                    }
                  </span>  
                )
              })
            }
          </div>
          <div className="number">
            <span className="song-number">
              <span>歌曲:</span>
              <span className='dark'>{calculatePlayNumber(songlistInformation.trackCount,0)}</span>
            </span>
            <span className="play-number">
              <span>播放:</span>
              <span className='dark'>{calculatePlayNumber(songlistInformation.playCount,0)}</span>
            </span>
          </div>
          <div className="desc">
            <span>简介:</span>
            <span className='dark'>{songlistInformation.description}</span>
            <span className='button' onClick={ e => {setShow(!show)}}>▶</span>
          </div>
        </div>
      </div>
    </MioSonglistTopDiv>
  )
})

export default MioSonglistTop