import React, { memo } from 'react';
import styled from '@emotion/styled';

import { MioFooterCss } from '../../common/css-var';

const MioFooterDiv = styled.div`
  height: ${MioFooterCss.height};
  bottom: 0;
  position: fixed;
`

const MioAppFooter = memo(() => {
  return (
    <MioFooterDiv>MioAppFooter</MioFooterDiv>
  )
})

export default MioAppFooter