import styled from "@emotion/styled";
import { ThemeColor } from "../../../../../common/css-var";

export const MioSongDetailIricsDiv = styled.div`
  height: 100%;
  overflow-y: scroll;  
  .shadow {
    width: 100%;
    height: 16px;
  }     
  .shadow-top {
    position: absolute;    
    top: 0;
    background: linear-gradient(to top,rgba(0,0,0,0),#2b2b2b);
  }
  .shadow-bottom {
    position: absolute;
    bottom: 0;    
    background: linear-gradient(to bottom,rgba(0,0,0,0),#2b2b2b);
  }
  // 定义滚动条样式

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