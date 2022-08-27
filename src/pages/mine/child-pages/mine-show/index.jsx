import React, { memo } from 'react'

import { MioMineShowDiv } from './css'

const MioMineShow = memo((props) => {
  const {userOtherInformData} = props;
  return (
    <MioMineShowDiv>
      {
        Object.keys(userOtherInformData).length 
        ? <>
            <div className="body">上半部分</div>
            <div className="middle">中间导航</div>
            <div className="bottom">下半部分</div>
          </>
        : <div className="loading">loading</div>
      }
      {/* <button onClick={e => props.startSetShow()}>修改资料</button> */}
    </MioMineShowDiv>
  )
})

export default MioMineShow