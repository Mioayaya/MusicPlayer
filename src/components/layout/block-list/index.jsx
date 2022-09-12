import ItemRef from '@arco-design/web-react/es/Collapse/item'
import React, { memo } from 'react'
import { useHistory } from 'react-router'

import calculatePlayNumber from '../../../utils/calculatePlayNumber'
import { getUserGender,getUserGenderStyle } from '../../../utils/getStyle'
import { MioLayoutBlockListDiv } from './css'

const MioLayoutBlockList = memo((props) => {
  const { resArr, type } = props;
  const histoy = useHistory();

  const typeImg = (item) => {
    if(type=='歌手') {
      return item.picUrl;
    }else if(type=='专辑') {
      return item.blurPicUrl;
    }else if(type=='歌单') {
      return item.coverImgUrl;
    }else if(type=='用户') {
      return item.avatarUrl
    }
  }

  const itemClick = (e,item) => {
    if(type=='歌单') {      
      if(e.target.className!='middle-author') {
        histoy.push({
          pathname: '/songlistInfomation',
          search: `?id=${item.id}`
        })
      }
    }else if(type=='用户') {
      histoy.push({
        pathname: '/spaceuid',
        search: `?uid=${item.userId}`
      })
    }
  }

  const userClick = (uid) => {
    histoy.push({
      pathname: '/spaceuid',
      search: `?uid=${uid}`
    })
  }

  return (
    <MioLayoutBlockListDiv> 
      {
        resArr.map((item,index) => {
          return(
            <div className="block-item"
                 key={index}
                 onClick={e => itemClick(e,item)}
            >
              <div className="left">
                <div className="avatar">
                  <img src={typeImg(item)} alt="" />
                  {
                    (type=='用户' && item.avatarDetail)
                    && 
                    <div className="avatar-def">
                      <img src={item.avatarDetail.identityIconUrl} alt="" />
                    </div>
                  }
                </div>
                <span className="item-name">{item.name}</span>
                {
                  type=='用户'
                  && 
                  <>
                    <span className="item-name">{item.nickname}</span>
                    <span className="user-gender" style={getUserGenderStyle(item.gender)}>{getUserGender(item.gender)}</span>
                  </>
                }
                <div className="alias">
                  {
                    (item.alias && item.alias[0])
                    &&
                    `(${item.alias[0]})`
                  }
                </div>
              </div>
              <div className="middle">
                {
                  type=='专辑'
                  && <span className='middle-author'>{item.artist.name}</span>
                }
                {
                  type=='歌单'
                  && <span className="middle-author" onClick={e => userClick(item.creator.userId)}>{item.creator.nickname}</span>
                }
              </div>
              <div className="right">
                {
                  type=='歌单'
                  &&
                  <>
                    <span className="playlist-number">{item.trackCount+'首'}</span>
                    <span className="playlist-playcount">{'▷'+calculatePlayNumber(item.playCount)}</span>
                  </>                  
                }
                {
                  type=='用户'
                  &&
                  <span className='user-sign'>{item.signature}</span>
                }
              </div>
              
            </div>
          )
          
        })
      }
    </MioLayoutBlockListDiv>
  )
})

export default MioLayoutBlockList