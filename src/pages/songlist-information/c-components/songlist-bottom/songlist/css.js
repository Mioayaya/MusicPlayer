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
        background-color: ${props => ThemeColor[props.theme].contentRightListHover};
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
      background-color: ${props => ThemeColor[props.theme].contentRightListHover};
    }
  }
  .emt {
    background-color: ${props => ThemeColor[props.theme].contentRightListEmt};
    :hover {
      background-color: ${props => ThemeColor[props.theme].contentRightListHover};
    }
  }
  .stay {
    background-color: ${props => ThemeColor[props.theme].contentRightListActive};
    :hover {
      background-color: ${props => ThemeColor[props.theme].contentRightListActiveHover};
    }
  }
  .active {
    .title {
      color: #ec4141;
    }
    .svg-icon {
      height: 15px;
      width: 15px;    
      margin-right: 10px;
      color: #ec4141;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }
  
`