import React, { memo } from 'react'

import { MioLayoutBlockListDiv } from './css'

const MioLayoutBlockList = memo((props) => {
  const { resArr, type } = props;
  console.log(resArr);

  const typeImg = (item) => {
    if(type=='歌手') {
      return item.picUrl;
    }
  }

  return (
    <MioLayoutBlockListDiv> 
      {
        resArr.map((item,index) => {
          return(
            <div className="block-item"
                 key={index}
            >
              <div className="left">
                <div className="avatar">
                  <img src={typeImg(item)} alt="" />
                </div>
                <span className="item-name">{item.name}</span>
                <div className="alia">{item.alia&&`(${item.alia[0]})`}</div>
              </div>
              <div className="middle"></div>
              <div className="right"></div>
              
            </div>
          )
          
        })
      }
    </MioLayoutBlockListDiv>
  )
})

export default MioLayoutBlockList