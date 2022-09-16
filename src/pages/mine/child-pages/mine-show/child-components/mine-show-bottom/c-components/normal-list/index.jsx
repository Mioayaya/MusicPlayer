import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { setNavKey } from '../../../../../../../../store/slices/content-left';
import calculatePlayNumber from '../../../../../../../../utils/calculatePlayNumber';

import { MioNormalListDiv } from './css'

const MioNormalList = memo((props) => {
  const {playlistArr,uid} = props;
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = useSelector(state => state.userInformSlice.userInform.id);

  const itemClick = (itemUserid,id) => {
    // 登录用户    
    
    if(itemUserid==userId) {
      dispatch(setNavKey(id));
      history.push({
        pathname: '/myplaylist',
        search: `?id=${id}`
      })
    }else {
      history.push({
        pathname: '/songlistInfomation',
        search: `?id=${id}`
      })
    }
    
  }

  return (
    <MioNormalListDiv>
      {
        playlistArr.map((item,index) => {
          return (
            <div key={index} 
                 className={(index+1)%5==0?'item':'item nlast'}
                 onClick={e => itemClick(item.creator.userId,item.id)}
            >
              <div className="img">
                <img src={item.coverImgUrl} alt="" />
              </div>
              <span className="name">{item.name}</span>              
              <span className="play-count">▷ {calculatePlayNumber(item.playCount)}</span>
              <div className="number">{item.trackCount}首</div>
              <div className="icon">▶</div>
            </div>
          )
        })
      }
    </MioNormalListDiv>
  )
})

export default MioNormalList