import styled from '@emotion/styled'
import { ThemeColor } from '../../common/css-var';

export const MioContentLeftDiv = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  height: 0;
  color: ${ props => ThemeColor[props.theme].fontContentColor3 };
  box-sizing: border-box;
  margin: 10px 0 0 10px;
  // 上半部分 css
  .content-left-top {
    color: ${ props => ThemeColor[props.theme].fontContentColor3 };
    display: flex;
    flex-direction: column;
    .content-left-top-item {
      color: ${ props => ThemeColor[props.theme].fontContentColor3 };
      display: block;
      padding: 10px 0 10px 5px;
      text-decoration: none;
      border-radius: 5px;
      margin-bottom: 5px;
      &:hover {
        color: ${ props => ThemeColor[props.theme].fontContentColor1 };
        background-color: ${ props => ThemeColor[props.theme].contentLeftHover };
      }
    }
    .content-left-top-item-active {
      font-size: large;
      font-weight: 700;
      color: ${ props => ThemeColor[props.theme].fontContentColor2 };
      background-color: ${ props => ThemeColor[props.theme].contentLeftHover };
      &:hover {
        color: ${ props => ThemeColor[props.theme].fontContentColor2 };
      }
    }
  }

  // 中间部分css
  .content-left-middle {
    margin-left: 5px;
    margin-top: 10px;
    color: ${ props => ThemeColor[props.theme].fontContentColor4 };
    display: flex;
    flex-direction: column;
    span {
      margin-bottom: 10px;
      font-size: small;
      user-select: none;
    }
    .content-left-middle-item {
      color: ${ props => ThemeColor[props.theme].fontContentColor3 };
      display: block;
      padding: 10px 0 10px 5px;
      text-decoration: none;
      border-radius: 5px;
      user-select: none;
      &:hover {
        color: ${ props => ThemeColor[props.theme].fontContentColor1 };
        background-color: ${ props => ThemeColor[props.theme].contentLeftHover };
      }
    }
    .content-left-middle-item-active {
      color: ${ props => ThemeColor[props.theme].fontContentColor2 };
      background-color: ${ props => ThemeColor[props.theme].contentLeftHover };
      &:hover {
        color: ${ props => ThemeColor[props.theme].fontContentColor2 };
      }
    }
  }

  // 底部的css
  .content-left-bottom {
    margin-left: 5px;
    margin-top: 10px;
  }

`