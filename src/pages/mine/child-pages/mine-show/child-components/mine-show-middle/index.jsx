import React, { memo } from 'react'

import { MioMineShowMiddleDiv } from './css'
import { userNavBar } from '../../../../../../axios/local-data'

const MioMineShowMiddle = memo((props) => {
  const {active,setActive,theme} = props;

  return (
    <MioMineShowMiddleDiv theme={theme}>
      <div className="nav-bar">
        {
          userNavBar.map(item => {
            return (
              <div className={active==item.key?'nav-bar-item active':'nav-bar-item'}
                   key={item.key}
                   onClick={e => setActive(item.key)}
              >
                <span>{item.title}</span>
                <div className="border"></div>
              </div>
            )            
          })
        }
      </div>
    </MioMineShowMiddleDiv>
  )
})

export default MioMineShowMiddle