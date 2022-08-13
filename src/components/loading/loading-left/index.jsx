import React, { memo } from 'react'
import styled from '@emotion/styled'

const MioLoadingLeftDiv = styled.div`
  @keyframes boxShadowOffset3 {
    0% {
        box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 -2px;
    }
    25% {
        box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 2px;
    }
    50% {
        box-shadow: 14px 0 0 -2px, 38px 0 0 -2px, -14px 0 0 2px, -38px 0 0 -2px;
    }
    75% {
        box-shadow: 14px 0 0 2px, 38px 0 0 -2px, -14px 0 0 -2px, -38px 0 0 -2px;
    }
    100% {
        box-shadow: 14px 0 0 -2px, 38px 0 0 2px, -14px 0 0 -2px, -38px 0 0 -2px;
    }
}

  position: relative;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  color: #ec4141;
  -webkit-animation: boxShadowOffset3 2s linear infinite;
  animation: boxShadowOffset3 2s linear infinite;

`


const MioLoadingLeft = memo(() => {
  return (
    <MioLoadingLeftDiv>

    </MioLoadingLeftDiv>
  )
})

export default MioLoadingLeft