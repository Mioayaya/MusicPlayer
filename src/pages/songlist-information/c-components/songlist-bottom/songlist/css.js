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
    &>*:not(:first-child) {
      :hover {
        background-color: #373737;
      }
    }
    &>*:first-child {
      text-align: center;
    }
  }
  .song-list-item {
    :hover {
      background-color: #373737;
    }
  }
`