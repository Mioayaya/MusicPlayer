import styled from "@emotion/styled";
import { ThemeColor } from "../../../../../../common/css-var";

export const MioMineShowTopDiv = styled.div`
  display: flex;
  flex-direction: row;

  .show-top-left {
    width: 200px;
    padding: 20px 20px 20px 0;
    .avatar {
      width: 200px;
      border-radius: 50%;
      img {
        user-select: none;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-size: cover;
      }
    }
    
  }

  .show-top-right {
    flex: 1;
    .name-level {
      padding-top: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      &>*:not(:last-child) {
        margin-right: 7px;
      }
      .name {
        font-size: 2rem;
        font-weight: 600;
        color: ${props => ThemeColor[props.theme].public.titleColor};
      }
      .gender {
        color: #fff;
        user-select: none;
        height: 20px;
        width: 20px;
        line-height: 20px;
        text-align: center;
        background-color: #ff0000;
        border-radius: 50%;
      }
      .level {
        color: #fff;
        user-select: none;
        color: #fff;
        padding: 0 5px;
        height: 23px;
        line-height: 23px;
        background-color: #ff0000;
        border-radius: 5px;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      }
      .vip {
        user-select: none;
        background-color: #000;
      }
    }

    .editor {
      position: relative;
      border-bottom: 1px solid ${props => ThemeColor[props.theme].content.split};
      margin: 10px 0;
      .btns {
        position: absolute;
        right: 0;
        top: -35px;
        span {
          padding: 5px;
          border: 2px solid ${props => ThemeColor[props.theme].public.border};
          border-radius: 15px;
          cursor: pointer;
          user-select: none;
          :hover {
            background-color: ${props => ThemeColor[props.theme].public.btnHover};
          }
        }
      }
    }

    .event-follow {
      display: flex;
      flex-direction: row;
      &>* {
        display: flex;
        flex-direction: column;
        align-items: center;
        user-select: none;
        cursor: pointer;
        color: ${props => ThemeColor[props.theme].public.titleColor};
        :not(:last-child) {
          padding-right: 40px;
        }
        :hover {
          color: ${props => ThemeColor[props.theme].public.lightColor};
        }
        .text {
          color: ${props => ThemeColor[props.theme].public.txtColor};
          :hover {
            color: ${props => ThemeColor[props.theme].public.lightColor};
          }
        }
      }
    }

    .area {
      margin-top: 20px;
      .text {
        color: ${props => ThemeColor[props.theme].public.titleColor};
      }
      .province,.city {
        margin-left: 5px;
        color: ${props => ThemeColor[props.theme].public.titleColor};
      }
    }

    .desc {
      position: relative;
      display: flex;
      flex-direction: row;
      margin-top: 5px;
      .text {
        white-space: nowrap;
        margin-right: 5px;
        color: ${props => ThemeColor[props.theme].public.titleColor};
      }
      .content {
        padding-right: 100px;
        overflow: hidden;
        text-overflow: ellipsis;      /* 超出部分省略号 */
        word-break: break-all;        /* break-all(允许在单词内换行。) */  
        display: -webkit-box;         /* 对象作为伸缩盒子模型显示 */
        -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
        -webkit-line-clamp: ${props => props.show? 99: 1};;        /* 显示的行数 */
        color: ${props => ThemeColor[props.theme].public.txtColor};
      }
      .button {
        color: ${props => ThemeColor[props.theme].public.titleColor};
        position: absolute;
        right: 20px;
        cursor: pointer;
        user-select: none;
        transition: transform 0.5s ;
        transform: ${props => props.show?`rotate(90deg)`: 'none'};
      }
    }
  }
`