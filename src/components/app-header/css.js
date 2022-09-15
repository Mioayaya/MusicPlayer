import styled from '@emotion/styled';

import { MioHeadCss,ThemeColor } from '../../common/css-var';

export const MioAppHeaderDiv = styled.div`
  height: ${MioHeadCss.height};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: ${MioHeadCss.AppmarginHeight} ${MioHeadCss.AppmarginWidth} 0  ${MioHeadCss.AppmarginWidth};
  background-color: ${ props => ThemeColor[props.theme].header.background };
  color: ${ props => ThemeColor[props.theme].public.lightColor };
  border-bottom: 3px solid ${ props => ThemeColor[props.theme].header.split };
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  .header-left {
    margin-left: ${MioHeadCss.marginWidth};
    display: flex;
    flex-direction: row;
    align-items: center;
    .header-left-img {
      width: 35px;
      height: 35px;
      background-image: url("${MioHeadCss.AyayaIcon}");
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 50%;
      margin-right: ${MioHeadCss.itemMarginWidth};
      cursor: pointer;
    }
    .header-left-title {
     margin-right:  50px;
    }
    .header-left-last {
      margin-right: ${MioHeadCss.itemMarginWidth};
    }
    .header-left-next {
      
    }
    .step {
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      padding: 0;
      background-color: ${ props => ThemeColor[props.theme].public.btn };
      border-radius: 30%;
      user-select: none;
      cursor:pointer;
    }
  }

  .header-middle {
    position: fixed;
    left: 500px;
  }

  .header-right {
    margin-right: ${MioHeadCss.marginWidth};
  }
`