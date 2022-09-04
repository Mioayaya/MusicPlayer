import styled from "@emotion/styled";
import { MioRecommendCss,ThemeColor } from "../../../../../../common/css-var";

export const MioRecmdSongListDiv = styled.div`
  margin-top: ${MioRecommendCss.marginHeight};
  position: relative;
  display: flex;
  width: auto;
  flex-direction: column;
  z-index: 0;
  .recmd-song-list-top {
    margin-bottom: 10px;
    a{
      text-decoration: none;
      color: white;
    }
  }

  .recmd-song-list-content {
    height: 150px;
    position: relative;
    display: block;
    aspect-ratio: 1 / 1;
    margin-bottom: 20px;
    color: white; 

    .number {
      position: absolute;
      background-color: rgba(0,0,0,0.4);
      border-radius: 10px;
      top: 0;
      right: 0;
      padding: 0 5px;
      font-size: small;
      margin: 3px 5px;
    }

    .icon {
      position: absolute;
      left: 0;
      top: 0;
      color: red;
      width: 25px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      background-color: white;
      border-radius: 50%;
      margin: 5px;
      opacity: 0;
      transition: opacity 1s;
    }

    .name {
      background-color: rgba(0,0,0,0.4);
      border-radius: 10px;
      position: absolute;
      bottom: 0;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;      /* 超出部分省略号 */
      word-break: break-all;        /* break-all(允许在单词内换行。) */  
      display: -webkit-box;         /* 对象作为伸缩盒子模型显示 */
      -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
      -webkit-line-clamp: 2;        /* 显示的行数 */
    }
  }

  .recmd-song-list-bottom {
    display: block;
    position: relative;

    .recmd-song-list-bottom-detail {
      .song-list-name {
        font-size: large;
        font-weight: 600;
        color: #d0d0d0;
        margin-bottom: 20px;
        display: block;
      }
      .item {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .item-left,.item-right {
          flex: 1;
          display: flex;
          flex-direction: row;
          background-color: #2f2f2f;
          border-radius: 10px;
          padding: 5px;
          margin-bottom: 10px;
          :hover {
            background-color: #373737;
          }
        }
        .item-left {
          margin-right: 20px;
        }
        .item-active {
          background-color: #414141;
        }
        .item-desc {
          flex: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-left: 20px;
        }
        .item-icon {
          flex: 1;
          align-items: center;
          display: flex;
          flex-direction: row;
          justify-content: end;
          &>* {
            padding-left: 10px;
          }
        }
        img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 20px;
          background-color: #7c7c7c;
        }
        .name {
          color: #fff;
          overflow: hidden;
          text-overflow: ellipsis;      /* 超出部分省略号 */
          word-break: break-all;        /* break-all(允许在单词内换行。) */  
          display: -webkit-box;         /* 对象作为伸缩盒子模型显示 */
          -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
          -webkit-line-clamp: 1;        /* 显示的行数 */
        }
        .icon {
          cursor: pointer;
          user-select: none;
        }
        .author {
          color: #7c7c7c;
        }
        .like {
          transition: 1s;
          transform: color;  
          :hover{
            color: red;
          }
        }
        .play {
          
        }
        .comment {
          
        }
        .time-length {
          white-space:nowrap;     // 强制文本不换行
        }
      }
    }

    .recmd-song-list-bottom-loading {
      margin-left: 40px;
      padding: 20px;
    }
  }

  .swiper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    border-radius: 10px;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;

    &:hover {
      cursor: pointer;
      img {
        filter: blur(4px) brightness(100%) contrast(100%) opacity(100%);
      }
      .name {
        backdrop-filter: blur(4px) brightness(100%) contrast(100%) opacity(100%)
      }
      .icon {
        opacity: 1;
      }
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    
  }

  .swiper-pagination-bullet {
    display: none;
  }
`
