import React, { memo } from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const MiocontentLeftDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const MiocontentLeft = memo(() => {
  return (
    <MiocontentLeftDiv>
      <NavLink to='/'>发现音乐</NavLink>
      <NavLink to='/mine'>我的主页</NavLink>
    </MiocontentLeftDiv>
  )
})


export default MiocontentLeft