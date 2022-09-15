import React, { memo } from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'
import { ThemeColor } from '../../../common/css-var'

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

  height: ${ props => props.height? props.height: '12px'};
  
  .loading {
    position: relative;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    color: ${props => ThemeColor[props.theme].public.messageColor};
    -webkit-animation: boxShadowOffset3 2s linear infinite;
    animation: boxShadowOffset3 2s linear infinite;
  }

`


const MioLoadingLeft = memo((props) => {
  const {height} = props
  const theme = useSelector(state => state.themeSlice.theme);

  return (
    <MioLoadingLeftDiv height={height} theme={theme}>
      <div className="loading"></div>
    </MioLoadingLeftDiv>
  )
})

export default MioLoadingLeft