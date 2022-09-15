import styled from "@emotion/styled";
import { ThemeColor } from "../../../../../common/css-var";

export const MioSongDetailIricsDiv = styled.div`
  height: 100%;
  overflow-y: scroll;  
  scroll-behavior: smooth;
  .shadow {
    width: 100%;
    height: 16px;
  }     
  .shadow-top {
    position: absolute;    
    top: 0;
    z-index: 1;
    background: ${props => ThemeColor[props.theme].content.iricsLinerTop};
  }
  .shadow-bottom {
    position: absolute;
    bottom: 0; 
    z-index: 1;   
    background: ${props => ThemeColor[props.theme].content.iricsLinerBottom};
  }

  .btn {
    position: absolute;
    right: 20px;
    bottom: 20px;
    z-index: 1;
    visibility: hidden;
    &>* {
      padding: 0 2px;
      text-align: center;
      background-color: ${props => ThemeColor[props.theme].public.btn};
      color: ${props => ThemeColor[props.theme].public.btnColor};
      cursor: pointer;
      :hover {
        color: ${props => ThemeColor[props.theme].public.iconColor};
      }
    }    
    .active {
      color: ${props => ThemeColor[props.theme].public.titleColor};
      :hover {
        color: ${props => ThemeColor[props.theme].public.titleColor};
      }
    }
  }

  .on-scroll-active {
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: row;
    font-size: 16px;
    color: ${props => ThemeColor[props.theme].public.titleColor};
    visibility: hidden;
    z-index: 1;
    top: ${props => (props.isTly+props.isRom) == 0? 'calc(46px * 3 + 12px)': `calc(${20+26*(1+props.isTly+props.isRom)}px * 1.5 + 12px)`};
    .start-now {
      position: absolute;
      cursor: pointer;
      right: 0;
    }
    .line-left {
      position: absolute;
      width: 50px;
      height: 1px;
      top: 11px;
      left: 43px;
      background: linear-gradient(to right,#ffffff,rgba(0,0,0,0));
    }
    .line-right {
      position: absolute;
      width: 50px;
      height: 1px;
      top: 11px;
      right: 18px;
      background: linear-gradient(to left,#ffffff,rgba(0,0,0,0));
    }
  }

  .lyric-list {
    display: flex;
    flex-direction: column;
    align-items: center;    
    .top-space {            
      height: ${props => (props.isTly+props.isRom) == 0? 'calc(46px * 3)': `calc(${20+26*(1+props.isTly+props.isRom)}px * 1.5)`};
    }
    .item-sentence {
      width: 100%;
      display: flex;
      flex-direction: column;
      position: relative;
      align-items: center;
      padding: 10px 0;
      color: #737373;
      color: ${props => ThemeColor[props.theme].public.txtColor};
      // 每句歌词的高度
      .item-height {
        height: 16px;
        line-height: 16px;
        /* font-size: 16px; */
        padding: 5px 0;
      }
      .space {
      }
      .item-time {
        user-select: none;
        position: absolute;
        left: 0;
      }
    }
    .active {
      font-size: 16px;
      color: ${props => ThemeColor[props.theme].public.titleColor};
    }
  }

  :hover {
    .btn {
      visibility: visible;
    }
    .on-scroll-active {
      visibility: visible;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 0.625rem;
      background-color: ${ props => ThemeColor[props.theme].public.scrollColor};
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
    background-color: rgba(255,255,255,0);
  }
`