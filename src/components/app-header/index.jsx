import React, { memo } from 'react';
import styled from '@emotion/styled';

import { MioHeadCss,ThemeColor } from '../../common/css-var';

// 接受一个全局的 redux
const theme = 'dark';

const MioAppHeaderDiv = styled.div`
  height: ${MioHeadCss.height};
  background-color: ${ props => ThemeColor[props.theme].head };
  color: ${ props => ThemeColor[props.theme].fontHeadColor1 };
  box-sizing: border-box;
  border-bottom: 3px solid ${ props => ThemeColor[props.theme].headShadow };
`

const MioAppHeader = memo(() => {
  return (
    <MioAppHeaderDiv theme={theme}>MioAppHeader</MioAppHeaderDiv>
  )
})

export default MioAppHeader