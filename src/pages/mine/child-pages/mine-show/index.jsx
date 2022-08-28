import React, { memo } from 'react'
import MioMineShowTop from './child-components/mine-show-top';

import { MioMineShowDiv } from './css'

const MioMineShow = memo((props) => {
  const {userOtherInformData,theme,startSetShow} = props;
  return (
    <MioMineShowDiv theme={theme}>
      {
        Object.keys(userOtherInformData).length 
        ? <>
            <MioMineShowTop userOtherInformData={userOtherInformData} 
                            theme={theme}
                            startSetShow={e => startSetShow()}
                            type="mine"
            />
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