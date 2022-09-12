import React, { memo } from 'react'
import { useMemo } from 'react';
import { useState } from 'react';

import { MioMineShowTopDiv } from './css';
import calculatePlayNumber from '../../../../../../utils/calculatePlayNumber';
import { getUserGender,getUserGenderStyle,getLevelStyle } from '../../../../../../utils/getStyle';
import { getProvice } from '../../../../../../utils/getProvice';
import { getCity } from '../../../../../../utils/getCity';

const MioMineShowTop = memo((props) => {
  const {userOtherInformData,theme,startSetShow,type} = props;

  // hooks
  const [ show,setShow ] = useState(false);

  return (
    <MioMineShowTopDiv theme={theme} show={show}>
      
      <div className="show-top-left">
        <div className="avatar">
          <img src={type=='mine'?userOtherInformData.avatarUrl:userOtherInformData.profile.avatarUrl} alt="" />
        </div>        
      </div>

      <div className="show-top-right">
        <div className="name-level">
          {
            type=='mine'
            ? <>
              <span className="name">{userOtherInformData.nickname}</span>
              <div className="gender" style={getUserGenderStyle(userOtherInformData.gender)}>{getUserGender(userOtherInformData.gender)}</div>
              <span className="level" style={getLevelStyle(userOtherInformData.level)}>Lv{userOtherInformData.level}</span>
              <span className="vip">vip{userOtherInformData.vipType}</span>
              </>
            : <>
              <span className="name">{userOtherInformData.profile.nickname}</span>
              <div className="gender" style={getUserGenderStyle(userOtherInformData.profile.gender)}>{getUserGender(userOtherInformData.profile.gender)}</div>
              <span className="level" style={getLevelStyle(userOtherInformData.level)}>Lv{userOtherInformData.level}</span>
              <span className="vip">vip{userOtherInformData.profile.vipType}</span>
              </>
          }
          
        </div>

        <div className="editor">
          {
            // 这里判断是不是自己的界面
            type === 'mine' 
            ? <>
                <div className="btns">
                  <span onClick={e => startSetShow()}>编辑资料</span>
                </div>
              </>
            : <>
                <div className="btns">
                  <span>发私信</span>
                  <span>{userOtherInformData.profile.followTime?(userOtherInformData.profile.followMe?'互相关注':'已关注'):'关注'}</span>                  
                </div>
              </>
          }
          
        </div>

        <div className="event-follow">
          <div className="follow">
            {
              type=='mine'
              ? <span className="number">{calculatePlayNumber(userOtherInformData.follows,2,1)}</span>
              : <span className="number">{calculatePlayNumber(userOtherInformData.profile.follows,2,1)}</span>
            }
            
            <span className="text">关注</span>
          </div>
          <div className="followed">
            {
              type=='mine'
              ? <span className="number">{calculatePlayNumber(userOtherInformData.followeds,2,1)}</span>
              : <span className="number">{calculatePlayNumber(userOtherInformData.profile.followeds,2,1)}</span>
            }
            <span className="text">粉丝</span>
          </div>
          <div className="event">
            {
              type=='mine'
              ? <span className="number">{calculatePlayNumber(userOtherInformData.eventCount,2,1)}</span>
              : <span className="number">{calculatePlayNumber(userOtherInformData.profile.eventCount,2,1)}</span>
            }
            <span className="text">动态</span>
          </div>
        </div>

        <div className="area">
          <span className="text">所在地区:</span>
          {
            type=='mine'
            ? <>
                <span className="province">{getProvice(userOtherInformData.province)}</span>
                <span className="city">{getCity(userOtherInformData.city)}</span>
              </>
            : <>
                <span className="province">{getProvice(userOtherInformData.profile.province)}</span>
                <span className="city">{getCity(userOtherInformData.profile.city)}</span>
              </>
          }
          
        </div>
        
        <div className="desc">
          <span className='text'>个人介绍:</span>
          <span className='content'>{type=='mine'?userOtherInformData.signature:userOtherInformData.profile.signature}</span>
          <span className='button' onClick={ e => {setShow(!show)}}>▶</span>
        </div>

      </div>
    </MioMineShowTopDiv>
  )
})

export default MioMineShowTop