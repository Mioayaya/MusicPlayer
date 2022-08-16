import React, { memo } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getCommentList } from '../../../../../axios/server/songlistInform';
import {MioSonglistBottomCommentListDiv} from './css'

const MioSonglistBottomCommentList = memo((props) => {
  const {id} = props;
  const [commentList,setCommentList] = useState({hotcomment:[],lasted:[]})
  console.log(commentList);

  useEffect(() => {
    // 最开始的请求
    if(id) {
      getCommentList(id).then(res => {
        console.log(res);
        setCommentList({hotcomment:res.hotComments,lasted:res.comments})
      })
    }
  },[id]);


  return (
    <MioSonglistBottomCommentListDiv>
      <div className="input">
        <input type="text" />
      </div>
      {
        commentList.hotcomment.length!=0
          ? <div className="content">
              {/* 热评 */}
              <div className="hot-comment">
                <span className="title">热门评论</span>
              </div>
              {/* 最新评论 */}
              <div className="lasted-comment">
                <span className="title">最新评论</span>
              </div>
            </div>
          : <div className="loading">loading</div>
      }
      
    </MioSonglistBottomCommentListDiv>
  )
})

export default MioSonglistBottomCommentList