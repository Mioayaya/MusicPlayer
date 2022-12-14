import styled from "@emotion/styled";
import { ThemeColor } from "../../../../common/css-var";

export const MioSongDetailNormalDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => ThemeColor[props.theme].content.background};
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

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
    background-color: ${ props => ThemeColor[props.theme].public.scrollColor};
  }
`

export const MioSongDetailNormalTopDiv = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
  margin-top: 50px;
  
  .top-tools {
    user-select: none;    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    z-index: 1;
    background-color: ${props => ThemeColor[props.theme].content.background};
    .down {
      cursor: pointer;
      width: 20px;
      height: 20px;
      font-size: 20px;
      margin: 10px;
      padding: 5px;
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 60px;
    color: ${props => ThemeColor[props.theme].public.txtColor};
    .song-name {
      font-size: 1.5rem;
      color: ${props => ThemeColor[props.theme].public.titleColor};
      padding: 5px 0;
    }
    .song-name-desu {
    }
    .song-author {
    }
    .al,.ar {
      :hover {
        cursor: pointer;
        color: ${props => ThemeColor[props.theme].public.linkHover};
      }
    }
  }
  
  .top-content {
    margin-top: 20px;
    display: flex;
    flex-direction: row;    
    height: 45vh;
    .content-pic {
      flex: 3;
      align-self: center;
      user-select: none;      
      .pic {
        width: 15vw;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        margin: auto;
        animation:fadenum 24000s infinite;
        animation-play-state: ${props => props.aniPlay?'running':'paused'};
        @keyframes fadenum{
          100%{transform:rotate(360000deg);}
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-size: cover;
          object-fit: cover;
        }
      }
    }
    .content-iyrics {
      flex: 4;
      height: 100%;
      position: relative;
    }
    .content-others {
      flex: 3;
    }
  }

  .content-others {
    margin-left: 50px;
    .simi-desc {
      color: ${props => ThemeColor[props.theme].public.darkColor};
    }
    .item-simi {
      width: 75%;
      display: flex;
      padding: 5px 0 5px 3px;
      flex-direction: row;
      align-items: center;
      .pic {
        width: 35px;
        height: 35px;
        border-radius: 10px;
        margin-right: 10px;
        white-space: nowrap;
        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          background-size: cover;
          object-fit: cover;
        }
      }
      .name {
        flex: 1;
        color: ${props => ThemeColor[props.theme].public.titleColor};
        overflow: hidden;
        text-overflow: ellipsis;      /* 超出部分省略号 */
        word-break: break-all;        /* break-all(允许在单词内换行。) */  
        display: -webkit-box;         /* 对象作为伸缩盒子模型显示 */
        -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
        -webkit-line-clamp: 1;        /* 显示的行数 */
      }
      :hover {
        background-color: ${props => ThemeColor[props.theme].public.emtHover};
      }
    }
  }
  
`