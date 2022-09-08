import React, { memo } from 'react'
import calculateTimeLength from '../../../../utils/calculateTimeLength';
import getStandTime from '../../../../utils/getStandTime';

import { MioCommentTemplateDiv } from './css'

const MioCommentTemplate = memo((props) => {
  const {comment,title,commentLength} = props;

  return (
    <MioCommentTemplateDiv>
      {
        title 
        ? <span className="title">{`${title}(${commentLength})`}</span>
        : ''
      }
      {
        comment.map((item,index) => {
          return(
            <div className="comment-item"
                  key={item.commentId}
            >
              <div className="item-avatar">
                <img src={item.user.avatarUrl} alt="" />
              </div>
              <div className="item-main">
                <span className="item-main-name">{item.user.nickname}</span>
                <div className="item-main-content">{item.content}</div>
                {
                  item.beReplied.length 
                  ? item.beReplied.map((reply,indey) => {
                    return(
                      <div className="item-replied"
                           key={indey}
                      >
                        <div className="item-replied-avatar">
                          <img src={reply.user.avatarUrl} alt="" />
                        </div>
                        <div className="item-replied-main">
                          <span className="item-replied-main-name">@{reply.user.nickname}</span>
                          <div className="item-replied-main-content">{reply.content}</div>
                        </div>
                      </div>
                    )
                  })
                  : ''
                }
                <div className="item-main-time">{getStandTime(item.time)}</div>
                <div className="deline-bar"></div>
              </div>
            </div>
          )
        })
      }
    </MioCommentTemplateDiv>
  )
})

export default MioCommentTemplate