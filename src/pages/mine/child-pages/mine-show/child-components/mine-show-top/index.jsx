import React, { memo } from 'react'
import { useMemo } from 'react';

import { MioMineShowTopDiv } from './css';
import levelColor from '../../../../../../common/level-color';
import calculatePlayNumber from '../../../../../../utils/calculatePlayNumber';
import { getProvice } from '../../../../../../utils/getProvice';
import { getCity } from '../../../../../../utils/getCity';
import { useState } from 'react';

const MioMineShowTop = memo((props) => {
  const {userOtherInformData,theme,startSetShow,type} = props;

  // hooks
  const [ show,setShow ] = useState(false);

  // methods
  const getUserGender = (gender) => {
    if(gender == 1) {
      return '♂';
    }else if(gender == 2) {
      return '♀';
    }else {
      return '';
    }
  }

  const getUserGenderStyle = (gender) => {
    if(gender == 1) {
      return {bacgroundColor:'#5fd4f2'};
    }else if(gender == 2) {
      return {backgroundColor:'#ff758f'};
    }else {
      return {display:'none'};
    }
  }

  const getLevelStyle = (levle) => {
    const style = {
      backgroundColor: '#79ecd9'
    }
    levle = Number(levle);
    switch(levle) {
      case 0:  style.backgroundColor = levelColor[0]; break;
      case 1:  style.backgroundColor = levelColor[1]; break;
      case 2:  style.backgroundColor = levelColor[2]; break;
      case 3:  style.backgroundColor = levelColor[3]; break;
      case 4:  style.backgroundColor = levelColor[4]; break;
      case 5:  style.backgroundColor = levelColor[5]; break;
      case 6:  style.backgroundColor = levelColor[6]; break;
      case 7:  style.backgroundColor = levelColor[7]; break;
      case 8:  style.backgroundColor = levelColor[8]; break;
      case 9:  style.backgroundColor = levelColor[9]; break;
      default: break;
    }
    return style;
  }

  return (
    <MioMineShowTopDiv theme={theme} show={show}>
      
      <div className="show-top-left">
        <div className="avatar">
          <img src={userOtherInformData.avatarUrl} alt="" />
        </div>        
      </div>

      <div className="show-top-right">
        <div className="name-level">
          <span className="name">{userOtherInformData.nickname}</span>
          <div className="gender" style={getUserGenderStyle(userOtherInformData.gender)}>{getUserGender(userOtherInformData.gender)}</div>
          <span className="level" style={getLevelStyle(userOtherInformData.level)}>Lv{userOtherInformData.level}</span>
          <span className="vip">vip{userOtherInformData.vipType}</span>
        </div>

        <div className="editor">
          {
            // 这里判断是不是自己的界面
            type === 'mine' 
            ? <>
                <div className="btns">
                  <button onClick={e => startSetShow()}>编辑资料</button>
                </div>
              </>
            : <>
                <div className="btns">
                  <button>发消息</button>
                  <button>关注/取关</button>
                </div>
              </>
          }
          
        </div>

        <div className="event-follow">
          <div className="follow">
            <span className="number">{calculatePlayNumber(userOtherInformData.follows,2,1)}</span>
            <span className="text">关注</span>
          </div>
          <div className="followed">
            <span className="number">{calculatePlayNumber(userOtherInformData.followeds,2,1)}</span>
            <span className="text">粉丝</span>
          </div>
          <div className="event">
            <span className="number">{calculatePlayNumber(userOtherInformData.eventCount,2,1)}</span>
            <span className="text">动态</span>
          </div>
        </div>

        <div className="area">
          <span className="text">所在地区:</span>
          <span className="province">{getProvice(userOtherInformData.province)}</span>
          <span className="city">{getCity(userOtherInformData.city)}</span>
        </div>
        
        <div className="desc">
          <span className='text'>个人介绍:</span>
          <span className='content'>{userOtherInformData.signature}</span>
          <span className='button' onClick={ e => {setShow(!show)}}>▶</span>
        </div>

      </div>
    </MioMineShowTopDiv>
  )
})

export default MioMineShowTop