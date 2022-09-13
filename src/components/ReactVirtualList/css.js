import styled from '@emotion/styled'
import { ThemeColor } from '../../common/css-var'

export const ReactVirtualListDiv = styled.div`
  position: absolute;
  top: 35px;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.8;
  overflow-y: scroll;

  .loading {
    margin-top: 0;
    text-align: center;
  }

  .listWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .itemWrapper {
    transform: translate3d(0, 0, 0);
  }
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
`