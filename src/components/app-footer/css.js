import styled from "@emotion/styled";
import { MioFooterCss,ThemeColor } from "../../common/css-var";

export const MioFooterDiv = styled.div`
  z-index: 2;
  height: ${MioFooterCss.height};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 ${MioFooterCss.marginWidth} ${MioFooterCss.marginHeight} ${MioFooterCss.marginWidth};
  margin-bottom: ${MioFooterCss.marginHeight};
  background-color: ${ props => ThemeColor[props.theme].head };
  color: ${props => ThemeColor[props.theme].fontFooterColor2};
  border-top: 2px solid ${props => ThemeColor[props.theme].footerTop};
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;

  .left {
    flex: 1;
    display: flex;
    flex-direction: row;
    cursor: default;
    .avatar {
      width: 50px;
      height: 50px;
      padding-right: 15px;
      img {
        user-select: none;
        width: 100%;
        height: 100%;
        background-size: cover;
        border-radius: 20px;
      }
    }
    .desc {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      
      .top {
        display: flex;
        flex-direction:row;
      }
      .title {   
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;      /* 超出部分省略号 */
        word-break: break-all;        /* break-all(允许在单词内换行。) */  
        display: -webkit-box;         /* 对象作为伸缩盒子模型显示 */
        -webkit-box-orient: vertical; // 设置或检索伸缩盒对象的子元素的排列方式
        -webkit-line-clamp: 1;        /* 显示的行数 */
      }
      .author {
        overflow: hidden;
        text-overflow: ellipsis;      /* 超出部分省略号 */
        word-break: break-all;        /* break-all(允许在单词内换行。) */  
        display: -webkit-box;         /* 对象作为伸缩盒子模型显示 */
        -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
        -webkit-line-clamp: 1;        /* 显示的行数 */
      }
    }
    .icon {
      font-size: large;
    }
  }

  .player {
    flex: 2;
    height: 50px; 
    display: flex;
    flex-direction: row;
    justify-content: center;

  }

  .right {
    flex: 1;
    text-align: right;
  }
`