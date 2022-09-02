import styled from "@emotion/styled";
import { ThemeColor } from "../../common/css-var";

export const MioBarPlayListDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 0;  
  padding: 20px 0;
  .title {
    font-size: 1.5rem;
    color: #d3d3d3;
    padding-bottom: 10px;
    padding-left: 20px;
  }
  
  .tips {
    user-select: none;
    padding-bottom: 10px;
    padding-left: 20px;
    .num {
      color: #5b5b5b;
      padding-right: 20px;
    }
    .clear {
      cursor: pointer;
      color: #85b9e6;
      :hover {
        color: #b3cee5;
      }
    }
  }

  .menu-item-list {
    display: flex;
    flex-direction: column;
    color: #d3d3d3;
    .item-list {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 30px;
      line-height: 30px;
      cursor: default;
      :hover {
        color: #ffffff;
        background-color: ${props => ThemeColor[props.theme].contentRightListHover};
      }
      .playing {
        flex: 1;
        text-align: center;
        user-select: none;
      }
      .item-name {
        flex: 6;
      }
      .item-author {
        flex: 6;        
      }
      .item-time {
        flex: 2;
      }
      .item-delete {
        cursor: pointer;
        user-select: none;
        flex: 1;
        text-align: center;
      }
      .item-text {        
        padding-right: 2px;
        overflow: hidden;
        text-overflow: ellipsis;      /* 超出部分省略号 */
        word-break: break-all;        /* break-all(允许在单词内换行。) */  
        display: -webkit-box;         /* 对象作为伸缩盒子模型显示 */
        -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
        -webkit-line-clamp: 1;        /* 显示的行数 */
      }
    }

    .emt {
      background-color: ${props => ThemeColor[props.theme].contentRightListEmt};
      :hover {
        background-color: ${props => ThemeColor[props.theme].contentRightListHover};
      }
    }

    .active {
      background-color: ${props => ThemeColor[props.theme].contentRightListActive};
      :hover {
        background-color: ${props => ThemeColor[props.theme].contentRightListActiveHover};
      }
    }

    .playing {
      .playing,.item-name,.item-author {
        color: #ec4141;
      }      
    }
  }

`