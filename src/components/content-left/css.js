import styled from '@emotion/styled'
import { ThemeColor } from '../../common/css-var';

export const MioContentLeftDiv = styled.div`
  position: relative; 
  display: flex;
  flex-direction: column;
  height: 0;
  color: ${props => ThemeColor[props.theme].public.titleColor};
  box-sizing: border-box;
  margin: 10px 0 0 10px;
  // 上半部分 css
  .content-left-top {
    color: ${ props => ThemeColor[props.theme].public.titleColor };
    display: flex;
    flex-direction: column;
    .content-left-top-item {
      color: ${ props => ThemeColor[props.theme].public.titleColor };
      display: block;
      padding: 10px 0 10px 5px;
      text-decoration: none;
      border-radius: 5px;
      margin-bottom: 5px;
      &:hover {
        background-color: ${ props => ThemeColor[props.theme].content.listHover };
      }
    }
    .content-left-top-item-active {
      font-size: large;
      font-weight: 700;
      color: ${ props => ThemeColor[props.theme].public.focusColor };
      background-color: ${ props => ThemeColor[props.theme].content.listHover };
      &:hover {
        color: ${ props => ThemeColor[props.theme].public.focusColor };
      }
    }
  }

  // 中间部分css
  .content-left-middle {
    margin-left: 5px;
    margin-top: 10px;
    color: ${ props => ThemeColor[props.theme].public.txtColor };
    display: flex;
    flex-direction: column;
    span {
      margin-bottom: 10px;
      font-size: small;
      user-select: none;
    }
    .content-left-middle-item {
      color: ${ props => ThemeColor[props.theme].public.titleColor };
      display: block;
      padding: 10px 0 10px 5px;
      text-decoration: none;
      border-radius: 5px;
      user-select: none;
      &:hover {
        color: ${ props => ThemeColor[props.theme].public.lightColor };
        background-color: ${ props => ThemeColor[props.theme].content.listHover };
      }
    }
    .content-left-middle-item-active {
      color: ${ props => ThemeColor[props.theme].public.focusColor };
      background-color: ${ props => ThemeColor[props.theme].content.listHover };
      &:hover {
        color: ${ props => ThemeColor[props.theme].public.focusColor };
      }
    }
  }

  // 底部的css
  .content-left-bottom {
    margin-left: 5px;
    margin-top: 10px;
  }

`