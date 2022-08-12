import styled from '@emotion/styled';
import { MioContentCss,ThemeColor } from '../../common/css-var';

export const MioContentDiv = styled.div`
flex: 1;
display: flex;
flex-direction: row;
position: relative;
background-color: ${ props => ThemeColor[props.theme].content};
.content-left {
  width: ${MioContentCss.left};
  height: 100%;
  overflow-y: hidden;
  border-right: 2px solid ${ props => ThemeColor[props.theme].contentDividing };
  box-sizing: border-box;
  &:hover {
    overflow-y: scroll;
  }
}
.content-right {
  flex: 1;
  overflow-y: scroll;
  overflow-x: hidden;
}
.scroll {
  /*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    background-color: rgba(255,255,255,0);
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    border-radius: 0.625rem;
    background-color: rgba(255,255,255,0);
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 0.625rem;
    background-color: ${ props => ThemeColor[props.theme].scrollColor};
  }
}
`