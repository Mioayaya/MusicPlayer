import React, { memo } from 'react';
import styled from '@emotion/styled';

import { MioFooterCss,ThemeColor } from '../../common/css-var';

// 接受一个全局的 redux
const theme = 'dark';

const MioFooterDiv = styled.div`
  height: ${MioFooterCss.height};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 ${MioFooterCss.marginWidth} ${MioFooterCss.marginHeight} ${MioFooterCss.marginWidth};
  margin-bottom: ${MioFooterCss.marginHeight};
  background-color: ${ props => ThemeColor[props.theme].head };
  color: ${props => ThemeColor[props.theme].fontFooterColor2};
  border-top: 2px solid ${props => ThemeColor[props.theme].footerTop};
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
  box-sizing: border-box;
`

const MioAppFooter = memo(() => {
  return (
    <MioFooterDiv theme={theme}>MioAppFooter</MioFooterDiv>
  )
})

export default MioAppFooter