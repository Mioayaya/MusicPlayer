import styled from "@emotion/styled";
import { ThemeColor } from "../../../../common/css-var";

export const MioMyPlaylistTopDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  .left {
    height: 200px;
    aspect-ratio: 1 / 1;
    padding-right: 20px;
    border-radius: 10px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
      background-color: #eee;
    }
  }

  .right {
    flex: 1;
    
    .item-1 {
      display: flex;
      flex-direction: row;
      align-items: center;
      .icon {
        font-size: small;
        color: ${props => ThemeColor[props.theme].songlistPageIconColor};
        padding: 0 3px;
        border: 1px solid ${props => ThemeColor[props.theme].songlistPageIconColor};
      }
      .title {
        color: ${props => ThemeColor[props.theme].songlistPageFontColorTitle};
        font-size: 1.5rem;
        font-weight: 600;
        margin-left: 10px;
      }
    }

    .item-2 {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 10px;
      img {
        display: block;
        width: 30px;
        height: 30px;
        object-fit: cover;
        border-radius: 50%;   
        background-color: #eee;   
        cursor: pointer;
      }
      .author-name {
        color: ${props => ThemeColor[props.theme].songlistPageLinkColor};
        padding: 0 10px;
        user-select: none;
        :hover {
          color: ${props => ThemeColor[props.theme].songlistPageLinkHoverColor};
          cursor: pointer;
        }
      }
      .create-time {
        font-size: small;
        color: ${props => ThemeColor[props.theme].songlistPageFontColor2};
      }
    }

    .item-3 {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 10px;
      &>* {
        color:${props => ThemeColor[props.theme].songlistPageFontColorTitle};
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
        border: 2px solid ${props => ThemeColor[props.theme].songlistPageBorder};
        border-radius: 20px;
        user-select: none;
        :hover {
          background-color: ${props => ThemeColor[props.theme].songlistPageButtonHover};
          cursor: pointer;
        }
      }
      &>*:not(:last-child) {
        margin-right: 20px;
      }
      
      .collet {
        cursor: auto;
        color: ${props => ThemeColor[props.theme].contentRightForbidFont};
        background-color: ${props => ThemeColor[props.theme].contentRightForbid};
      }
    }

    .item-4 {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .tags {
        .tags-item {
          color: ${props => ThemeColor[props.theme].songlistPageLinkColor};
          user-select: none;
          :hover {
            color: ${props => ThemeColor[props.theme].songlistPageLinkHoverColor};
            cursor: pointer;
          }
          
        }
        &>*:first-of-type {
          margin-right: 5px;
        }
      }
      .number {
        margin-top: 10px;
        .song-number,.play-number {
          &>*:first-of-type {
            margin-right: 5px;
          }  
        }
        &>*:first-of-type {
          margin-right: 20px;
        }
      }
      .desc {
        position: relative;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        .dark {
          flex: 1;
          padding-right: 100px;
          overflow: hidden;
          text-overflow: ellipsis;      /* 超出部分省略号 */
          word-break: break-all;        /* break-all(允许在单词内换行。) */  
          display: -webkit-box;         /* 对象作为伸缩盒子模型显示 */
          -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
          -webkit-line-clamp: ${props => props.show? 99: 1};;        /* 显示的行数 */
        }
        .button {
          position: absolute;
          right: 20px;
          cursor: pointer;
          user-select: none;
          transition: transform 0.5s ;
          transform: ${props => props.show?`rotate(90deg)`: 'none'};
          
        }
        &>*:first-of-type {
          margin-right: 5px;
        }
      }
      span {
        color: ${props => ThemeColor[props.theme].songlistPageFontColorTitle};
      }
      .dark {
        color: ${props => ThemeColor[props.theme].songlistPageFontColor2};
      }
      .link {
        cursor: pointer;
        user-select: none;
        color: ${props => ThemeColor[props.theme].songlistPageLinkColor};
        :hover {
          color: ${props => ThemeColor[props.theme].songlistPageLinkHoverColor};
        }
      }
    }
  }
  img {
    user-select: none;
  }
`