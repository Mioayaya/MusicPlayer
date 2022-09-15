import styled from "@emotion/styled";
import { ThemeColor } from "../../../../../common/css-var";

export const MioSonglistBottomSonglistDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  .song-list-item,.song-list-item-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    &>span {
      height: 35px;
      line-height: 35px;
      user-select: none;
      padding-left: 10px;
      overflow: hidden;
      text-overflow: ellipsis;      /* 超出部分省略号 */
      word-break: break-all;        /* break-all(允许在单词内换行。) */  
      display: -webkit-box;         /* 对象作为伸缩盒子模型显示 */
      -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
      -webkit-line-clamp: 1;        /* 显示的行数 */
    }
    .act {
      flex: 1;
      text-align: end;
      .icon {
        margin-right: 20px;
      }
      .number {
        padding-right: 10px;
      }
    }
    .title {
      flex: 5;
    }
    .singer {
      flex: 2;
    }
    .album {
      flex: 3;
    }
    .time {
      flex: 1;
    }
  }
  .song-list-item-top {
    &>*:not(:first-of-type) {
      :hover {
        background-color: ${props => ThemeColor[props.theme].public.emtHover};
      }      
    }
    &>*:first-of-type {
      text-align: center;
    }
  }


  .song-list-item {
    .icon {
      cursor: pointer;
    }
    .liked {
      color: #ec4141;
    }
    :hover {
      background-color: ${props => ThemeColor[props.theme].public.emtHover};
    }
  }
  .emt {
    background-color: ${props => ThemeColor[props.theme].public.emt};
    :hover {
      background-color: ${props => ThemeColor[props.theme].public.emtHover};
    }
  }
  .stay {
    background-color: ${props => ThemeColor[props.theme].public.active};
    :hover {
      background-color: ${props => ThemeColor[props.theme].public.activeHover};
    }
  }
  .active {
    .title {
      color: ${props => ThemeColor[props.theme].public.messageColor};
    }
    .svg-icon {
      height: 15px;
      width: 15px;    
      margin-right: 10px;
      color: ${props => ThemeColor[props.theme].public.messageColor};
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }
  
`