import React, { memo } from 'react'

import { MioMineChangeDiv } from './css'
const MioMineChange = memo((props) => {

  // 业务逻辑
  const saveInformation = () => {
    props.save();
  }
  return (
    <MioMineChangeDiv>MioMineChange
      <button onClick={e => props.startSetShow()}>返回</button>
      <button onClick={e => saveInformation()}>保存</button>
    </MioMineChangeDiv>
  )
})

export default MioMineChange