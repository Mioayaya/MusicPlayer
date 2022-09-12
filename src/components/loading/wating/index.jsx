import styled from '@emotion/styled'
import React, { memo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import theme from '../../../store/slices/theme'

const MioWatingDiv = styled.div`
  color: white;
  text-align: center;
  margin-top: 20%;
`

const MioWating = memo(() => {
  const Theme = useSelector(state => state.themeSlice.theme);
  const [time,setTime] = useState(3);

  useEffect(() => {
    setInterval(() => {
      setTime(time-1);
    },1000);
  })

  return (
    <MioWatingDiv theme={Theme}>
      <h1>暂未开发,{time}s后返回主页</h1>
    </MioWatingDiv>
  )
})

export default MioWating