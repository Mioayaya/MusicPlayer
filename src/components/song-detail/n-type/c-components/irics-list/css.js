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
    z-index: 1;
    background: linear-gradient(to top,rgba(0,0,0,0),#2b2b2b);
  }
  .shadow-bottom {
    position: absolute;
    bottom: 0; 
    z-index: 1;   
    background: linear-gradient(to bottom,rgba(0,0,0,0),#2b2b2b);
  }

  .lyric-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    .item-sentence {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;
      .space {
        height: 4rem;
      }
      .item-time {
        user-select: none;
        position: absolute;
        left: 0;
      }
    }
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