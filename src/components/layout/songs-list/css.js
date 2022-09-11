import styled from "@emotion/styled";
import { ThemeColor } from "../../../common/css-var";

export const MioLayoutSongListDiv = styled.div`
  .song-list-item-top,.song-list-item {
    display: flex;
    flex-direction: row;
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
    }
    .song-title {
      flex: 4;
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
    .pop {
      flex: 2;
      text-align: center;
    }
  }

  .song-list-item {
    :hover {
      background-color: #474747;
    }
    .act {
      .number {        
        margin-right: 5px;
      }
    }
  }

  .song-list-item.active {
    background-color: #474747;
    :hover {
      background-color: #414141;
    }
  }

  &>:nth-child(2n) {
    background-color: #333333;      
    :hover {
      background-color: #474747;
    }
  }

`