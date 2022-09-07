import React, { memo,useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getSongComment } from '../../../axios/server/playSong';
import { setHotCommit } from '../../../store/slices/play-list';
import MioCommentTemplate from '../c-component/comment-template';
import { MioSongCommentDiv } from './css';

const MioSongComment = memo((props) => {
  const {scroll,playlist,scrollTop} = props;
  const dispatch = useDispatch();
  const hotComment = useSelector(state => state.playlistSlice.comment.hotList);
  const [offset,setOffset] = useState(0);
  const [more,setMore] = useState(true);

  // 第一次加载
  useEffect(() => {
    if(playlist[playlist.p]) {
      getSongComment(playlist[playlist.p].value.id,0).then(res => {
        dispatch(setHotCommit(res.hotComments));
        console.log(res);
        setOffset(1);
        setMore(res.more);
      })
    }
  },[playlist.p])

  useEffect(() => {
    if(scroll && more) {
      if(playlist[playlist.p]) {
        getSongComment(playlist[playlist.p].value.id,offset).then(res => {          
          console.log(res);
          setOffset(offset+1);
          setMore(res.more);
        })
      }
    }
    getSongComment()
  },[scroll,playlist])

  return (
    <MioSongCommentDiv>
      {/* 热评 */}
      {
        hotComment.length 
        ? <MioCommentTemplate comment={hotComment} title="热门评论" commentLength={hotComment.length}/>
        : ''
      }
      
    </MioSongCommentDiv>
  )
})

export default MioSongComment