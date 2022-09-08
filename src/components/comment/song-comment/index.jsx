import React, { memo,useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getSongComment } from '../../../axios/server/playSong';
import { setHotCommit, setNormalList } from '../../../store/slices/play-list';
import MioCommentTemplate from '../c-component/comment-template';
import { MioSongCommentDiv } from './css';

const MioSongComment = memo((props) => {
  const {scroll,playlist,scrollTop} = props;
  const dispatch = useDispatch();
  const hotComment = useSelector(state => state.playlistSlice.comment.hotList);
  const normalList = useSelector(state => state.playlistSlice.comment.normalList);
  const [offset,setOffset] = useState(0);
  const [more,setMore] = useState(true);
  const [total,setTotal] = useState(0);
  const [playP,setPlayP] = useState(-1);  
  
  // 第一次加载
  useEffect(() => {
    if(playlist[playlist.p]) {
      getSongComment(playlist[playlist.p].value.id,0).then(res => {
        dispatch(setHotCommit(res.hotComments));
        dispatch(setNormalList({arr:res.comments,type:0}));        
        setOffset(20);
        setMore(res.more);
        setTotal(res.total);
        setPlayP(playlist.p);
      })
    }
  },[playlist.p])

  useEffect(() => {    
    if(scroll && more && playP == playlist.p) {
      if(playlist[playlist.p]) {
        getSongComment(playlist[playlist.p].value.id,offset).then(res => {          
          dispatch(setNormalList({arr:res.comments,type:1}));
          setOffset(offset+20);
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
        ? <>
          <MioCommentTemplate comment={hotComment} title="热门评论" commentLength={hotComment.length} commentWidth="50%"/>
          {offset == 1 && <div className='loading'>加载中</div>}
          </> 
        : ''
      }
      {        
        normalList.length
        ? 
          <>
          <MioCommentTemplate comment={normalList} title="全部评论" commentLength={total} commentWidth="50%"/>
          {more && <div className='loading'>加载中</div>}
          </>
        : ''
      }
      
    </MioSongCommentDiv>
  )
})

export default MioSongComment