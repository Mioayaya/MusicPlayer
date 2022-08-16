// 头像等 组件条
import React, { memo } from 'react'
import styled from '@emotion/styled'

import { ThemeColor } from '../../../common/css-var'
import { useHistory } from 'react-router';

// 接受一个全局的 redux
const theme = 'dark';

const MioAvatarBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${ props => ThemeColor[props.theme].fontHeadColor2 };

  &>*:not(last-child) {
    margin-right: 25px;
  }

  .avatar-bar-avatar {
    height: auto;
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    user-select: none;

    .item {
      margin-left: 5px;
      
      &:hover{
        color: ${ props => ThemeColor[props.theme].fontHeadColor1 };
        cursor: pointer;
      }
    }
    
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-size: cover;
      cursor: pointer;
    }
  }

  .icon {
    width: 1.5em; 
    height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    color: ${ props => ThemeColor[props.theme].fontHeadColor2 };
    &:hover {
      color: ${ props => ThemeColor[props.theme].fontHeadColor1 };
      cursor: pointer;
    }
  }
  
`

const MioAvatarBar = memo(() => {
  const history = useHistory();

  const avatarClick = () => {
    history.push({
      pathname: '/login',
       //search:`?${encodeURI(JSON.stringify(record))}` 如果传递的是对象，需要对对象进行url编码不然解码会报错
    })
  }
  return (
    <MioAvatarBarDiv theme={theme}>
      <div className="avatar-bar-avatar">
        <img src="/src/assets/imgs/avatar.png" onClick={e => {avatarClick()}} />
        <span className="avatar-bar-avatar-name item" onClick={e => {avatarClick()}}>小路绫</span>
        <span className="avatar-bar-avatar-more item">▼</span>
      </div>
      
      {/* 换肤 */}
      <svg className="avatar-bar-cloths icon" aria-hidden="true">
        <use xlinkHref="#icon-yifu"></use>
      </svg>

      {/* 设置 */}
      <svg className="avatar-bar-cloths icon" aria-hidden="true">
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