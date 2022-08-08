import React, { memo } from 'react';
import styled from '@emotion/styled';

import { MioHeadCss } from '../../common/css-var';

const MioAppHeaderDiv = styled.div`
  height: ${MioHeadCss.height};
`

const MioAppHeader = memo(() => {
  return (
    <MioAppHeaderDiv>MioAppHeader</MioAppHeaderDiv>
  )
})

export default MioAppHeader