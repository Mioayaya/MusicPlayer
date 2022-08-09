import React, { memo } from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

import { ThemeColor } from '../../common/css-var';

// 接受一个全局的 redux
const theme = 'dark';

const MioContentLeftDiv = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  height: 0;
  background-color: ${ props => ThemeColor[props.theme].content };
  color: ${ props => ThemeColor[props.theme].fontContentColor3 };
  box-sizing: border-box;
  a {
    color: ${ props => ThemeColor[props.theme].fontContentColor3 };
    text-decoration: none;
  }
  a:hover {
    color: ${ props => ThemeColor[props.theme].fontContentColor1 };
  }
`

const MioContentLeft = memo(() => {
  return (
    <MioContentLeftDiv theme={theme}>
      <NavLink to='/'>发现音乐</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>
      <NavLink to='/mine'>我的</NavLink>

    </MioContentLeftDiv>
  )
})


export default MioContentLeft