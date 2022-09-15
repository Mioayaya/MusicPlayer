import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setSongInformShow } from '../../../../store/slices/play-list';
import { setUserCounter } from '../../../../store/slices/user-inform';
import getStandTime from '../../../../utils/getStandTime';

import { MioCommentTemplateDiv } from './css'

const MioCommentTemplate = memo((props) => {
  const {comment,title,commentLength,commentWidth} = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const theme = useSelector(state => state.themeSlice.theme);

  const userClick = (uid) => {
    dispatch(setSongInformShow(false));
    dispatch(setUserCounter());
    history.push({
      pathname: '/spaceuid',
      search: `?uid=${uid}`
    });
  }

  return (
    <MioCommentTemplateDiv commentWidth={commentWidth} theme={theme}>
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
              <div className="item-avatar" onClick={e => userClick(item.user.userId)}>
                <img src={item.user.avatarUrl} alt="" />
              </div>
              <div className="item-main">
                <span className="item-main-name" onClick={e => userClick(item.user.userId)}>{item.user.nickname}</span>
                <div className="item-main-content">{item.content}</div>
                {
                  item.beReplied.length 
                  ? item.beReplied.map((reply,indey) => {
                    return(
                      <div className="item-replied"
                           key={indey}
                      >
                        <div className="item-replied-avatar" onClick={e => userClick(reply.user.userId)}>
                          <img src={reply.user.avatarUrl} alt="" />
                        </div>
                        <div className="item-replied-main">
                          <span className="item-replied-main-name" onClick={e => userClick(reply.user.userId)}>@{reply.user.nickname}</span>
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