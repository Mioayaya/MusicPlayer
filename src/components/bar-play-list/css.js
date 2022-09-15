import styled from "@emotion/styled";
import { ThemeColor } from "../../common/css-var";

export const MioBarPlayListDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 0;  
  padding: 20px 0;
  .title {
    font-size: 1.5rem;
    color: ${props => ThemeColor[props.theme].public.titleColor};
    padding-bottom: 10px;
    padding-left: 20px;
  }
  
  .tips {
    user-select: none;
    padding-bottom: 10px;
    padding-left: 20px;
    .num {
      color: ${props => ThemeColor[props.theme].public.darkColor};
      padding-right: 20px;
    }
    .clear {
      cursor: pointer;
      color: ${props => ThemeColor[props.theme].public.linkColor};
      margin-right: 20px;
      :hover {
        color: ${props => ThemeColor[props.theme].public.linkHover};
      }
    }
  }

  .menu-item-list {
    display: flex;
    flex-direction: column;
    color: ${props => ThemeColor[props.theme].public.titleColor};
    .item-list {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 30px;
      line-height: 30px;
      cursor: default;
      :hover {
        background-color: ${props => ThemeColor[props.theme].public.emtHover};
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
      background-color: ${props => ThemeColor[props.theme].public.emt};
      :hover {
        background-color: ${props => ThemeColor[props.theme].public.emtHover};
      }
    }

    .active {
      background-color: ${props => ThemeColor[props.theme].public.active};
      :hover {
        background-color: ${props => ThemeColor[props.theme].public.activeHover};
      }
    }

    .playing {
      .playing,.item-name,.item-author {
        color: ${props => ThemeColor[props.theme].public.messageColor};
      }      
    }
  }

`