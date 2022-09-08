import React, { memo } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCommentList } from '../../../../../axios/server/songlistInform';
import { setSLHotComment,setSLNormalComment,clearSLComment, setCommentScroll } from '../../../../../store/slices/songlist-inform'
import {MioSonglistBottomCommentListDiv} from './css'

import MioCommentTemplate from '../../../../../components/comment/c-component/comment-template';

const MioSonglistBottomCommentList = memo((props) => {
  const {id} = props;
  const dispatch = useDispatch();
  const songListComment = useSelector(state => state.songlistSlice.comment);
  const [offset,setOffset] = useState(0);
  const [more,setMore] = useState(true);
  const [total,setTotal] = useState(0);
  const [isFirstLoad,setIsFirstLoad] = useState(false);

  useEffect(() => {
    dispatch(clearSLComment());
    return () => dispatch(clearSLComment());
  },[])

  useEffect(() => {
    // 最开始的请求
    if(id) {
      getCommentList(id,0).then(res => {
        console.log('请求1');
        dispatch(setSLHotComment(res.hotComments));
        dispatch(setSLNormalComment({arr:res.comments,type:0}));
        setOffset(20);
        setMore(res.more);
        setTotal(res.total);
        setIsFirstLoad(true);        
      })
    }
  },[id]);

  useEffect(() => {
    if(songListComment.isScroll && more && isFirstLoad) {
      console.log(songListComment.isScroll);
      console.log(offset);
      getCommentList(id,offset).then(res => {
        dispatch(setSLNormalComment({arr:res.comments,type:1}));
        setOffset(offset+20);
        setMore(res.more);
      })
    }

  },[songListComment.isScroll])


  return (
    <MioSonglistBottomCommentListDiv>
    {
      songListComment.hotComment.length 
      ? <MioCommentTemplate comment={songListComment.hotComment} title="热门评论" commentLength={songListComment.hotComment.length} commentWidth="99%"/>
      : ''
    } 

    {
      songListComment.normalComment.length
      ? <>
        <MioCommentTemplate comment={songListComment.normalComment} title="全部评论" commentLength={total} commentWidth="99%"/>
        {more && <div className='loading'>加载中</div>}
        </>
      : ''
    }
      
    </MioSonglistBottomCommentListDiv>
  )
})

export default MioSonglistBottomCommentList