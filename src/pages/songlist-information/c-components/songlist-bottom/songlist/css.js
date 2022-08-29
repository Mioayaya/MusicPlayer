import styled from "@emotion/styled";

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
        padding-right: 20px;
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
        background-color: #373737;
      }
    }
    &>*:first-of-type {
      text-align: center;
    }
  }
  .song-list-item {
    :hover {
      background-color: #373737;
    }
  }
`