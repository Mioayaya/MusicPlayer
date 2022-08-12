import styled from '@emotion/styled';

export const MioFoundMusicDiv = styled.div`
  height: 0;
  color: white;
  margin: 20px 20px 0 20px;
  .found-music-nav {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    .found-music-nav-item {
      display: block;
      text-decoration: none;
      color: white;
      font-size: large;
    }
    .found-music-nav-item-active {
      font-size: larger;
      font-weight: 600;
      border-bottom: 3px solid red;
    }
    
    &>*:not(last-child) {
      margin-right: 25px;
    }
  }

`