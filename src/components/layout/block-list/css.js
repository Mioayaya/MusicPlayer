import styled from "@emotion/styled";
import { ThemeColor } from "../../../common/css-var";

export const MioLayoutBlockListDiv = styled.div`
  display: flex;
  flex-direction: column;
  .block-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
    :hover {
      background-color: #414141;
    }

    .left {
      flex: 2;
      display: flex;
      flex-direction: row;
      align-items: center;
      .avatar {
        margin-left: 20px;
        width: 50px;
        height: 50px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          background-size: cover;
          object-fit: cover;
          border-radius: 10px;
        }
        .avatar-def {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          position: absolute;
          right: 0;
          bottom: 0;
          img {
            border-radius: 50%;
          }
        }
      }
      .item-name {
        margin-left: 10px;
      }
      .user-gender {
        color: #fff;
        user-select: none;
        height: 20px;
        width: 20px;
        line-height: 20px;
        text-align: center;
        background-color: #ff0000;
        border-radius: 50%;
      }
      .alias {
        margin-left: 10px;
        color: #666666;
      }
    }
    .middle {
      flex: 1;
      .middle-author {
        user-select: none;
        :hover {
          color: #ffffff;
        }
      }
    }
    .right {
      flex: 1;      
      position: relative;
      .playlist-playcount {
        position: absolute;
        left: 40%;
      }
    }
  }

  &>:nth-of-type(2n+1) {
    background-color: #333333;
    :hover {
      background-color: #474747;
    }
  }

  .item-name,.middle-author,.user-sign {
    overflow: hidden;
    text-overflow: ellipsis;      /* 超出部分省略号 */
    word-break: break-all;        /* break-all(允许在单词内换行。) */  
    display: -webkit-box;         /* 对象作为伸缩盒子模型显示 */
    -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
    -webkit-line-clamp: 1;        /* 显示的行数 */
  }

`