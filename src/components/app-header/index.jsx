import React, { memo } from 'react';
import styled from '@emotion/styled';

import { MioHeadCss,ThemeColor } from '../../common/css-var';

// 接受一个全局的 redux
const theme = 'dark';

const MioAppHeaderDiv = styled.div`
  height: ${MioHeadCss.height};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: ${MioHeadCss.AppmarginHeight} ${MioHeadCss.AppmarginWidth} 0  ${MioHeadCss.AppmarginWidth};
  background-color: ${ props => ThemeColor[props.theme].head };
  color: ${ props => ThemeColor[props.theme].fontHeadColor1 };
  border-bottom: 3px solid ${ props => ThemeColor[props.theme].headShadow };
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .header-left {
    margin-left: ${MioHeadCss.marginWidth};
    display: flex;
    flex-direction: row;
    align-items: center;
    .img {
      width: 35px;
      height: 35px;
      background-image: url("${MioHeadCss.AyayaIcon}");
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 50%;
      margin-right: ${MioHeadCss.itemMarginWidth};
    }
  }

  .header-middle {

  }

  .header-right {
    margin-right: ${MioHeadCss.marginWidth};
  }
`

const MioAppHeader = memo(() => {
  return (
    <MioAppHeaderDiv theme={theme}>
      <div className="header-left">
        <div className="img"></div>
        <span>AyayaMusic</span>
      </div>
      <div className="header-middle">
        搜索框等
      </div>
      <div className="header-right">
        头像 换肤 设置 message x
      </div>
    </MioAppHeaderDiv>
  )
})

export default MioAppHeader