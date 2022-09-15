// 头像等 组件条
import React, { memo } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';


import getSession from '../../../utils/getSession';
import { useState } from 'react';
import { setNavKey } from '../../../store/slices/content-left';
import { MioAvatarBarDiv } from './css';
import calculatePlayNumber from '../../../utils/calculatePlayNumber';
import MioChangeCloths from '../change-cloths';

const MioAvatarBar = memo(() => {
  const theme = useSelector(state => state.themeSlice.theme);
  const userInform = useSelector(state => state.userInformSlice.userInform);
  const useOtherData = useSelector(state => state.userInformSlice.userOtherInform.data);
  const dispatch = useDispatch();
  const history = useHistory();
  const [userData,setuserData] = useState(0);
  const [cloths,setCloths] = useState(false);
  
  useEffect(() => {
    // 设置用户信息 包括登录状态
    setuserData(getSession());
  },[userInform.id])

  const avatarClick = () => {
    if(userData.isLogin) {
      dispatch(setNavKey(99998));
      history.push({
        pathname: '/mine'
      })
    }else {
      dispatch(setNavKey(99998));
      history.push({
        pathname: '/login',
        //search:`?${encodeURI(JSON.stringify(record))}` 如果传递的是对象，需要对对象进行url编码不然解码会报错
      })
    }
  }

  const settingClick = () => {
    history.push({
      pathname: '/settings'
    })
  }
  return (
    <MioAvatarBarDiv theme={theme} cloths={cloths}>
      <div className="avatar-bar-avatar">
        <div className="avatar">
          <img src={userData.isLogin?userData.data.userAvatar:'/src/assets/imgs/avatar.png'} onClick={e => {avatarClick()}} />
          {
            userData.isLogin
            ? <div className="mini-inform">            
                <div className="top">
                  <span className="name">{userData.data.userNickname}</span>
                </div>
                <div className="middle">
                  <div className="event">
                    <span className="number">{calculatePlayNumber(useOtherData.eventCount,2,1)}</span>
                    <span className="txt">动态</span>
                  </div>
                  <div className="follow">
                    <span className="number">{calculatePlayNumber(useOtherData.follows,2,1)}</span>
                    <span className="txt">关注</span>
                  </div>
                  <div className="followed">
                    <span className="number">{calculatePlayNumber(useOtherData.followeds,2,1)}</span>
                    <span className="txt">粉丝</span>
                  </div>
                </div>
                <div className="bottom">
                  <div className="self">
                    <span onClick={e => avatarClick()}>个人中心</span>
                    <span>{'>'}</span>
                  </div>
                  <div className="singout">
                    <span>退出登录</span>
                    <span>{'>'}</span>
                  </div>
                </div>
              </div>
            : ''
          }
          
        </div>
        <span className="avatar-bar-avatar-name item" onClick={e => {avatarClick()}}>
          {userData.isLogin?userData.data.userNickname:'小路绫'}
        </span>
      </div>
      
      {/* 换肤 */}
      <svg className="avatar-bar-cloths icon" aria-hidden="true" onClick={e => setCloths(!cloths)}>
        <use xlinkHref="#icon-yifu"></use>
      </svg>

      <div className="cloths-card">
        <MioChangeCloths />
      </div>

      {/* 设置 */}
      <svg className="avatar-bar-cloths icon" aria-hidden="true" onClick={e => settingClick()}>
        <use xlinkHref="#icon-settings"></use>
      </svg>

      {/* 消息 */}
      <svg className="avatar-bar-cloths icon" aria-hidden="true">
        <use xlinkHref="#icon-messages"></use>
      </svg>

      {/* 关闭 */}
      <svg className="avatar-bar-cloths icon" aria-hidden="true">
        <use xlinkHref="#icon-guanbi"></use>
      </svg>
    </MioAvatarBarDiv>
  )
})

export default MioAvatarBar