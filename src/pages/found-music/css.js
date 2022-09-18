import styled from '@emotion/styled';
import { ThemeColor } from '../../common/css-var';

export const MioFoundMusicDiv = styled.div`
  height: 0;
  color: ${props => ThemeColor[props.theme].public.lightColor};
  margin: 20px 20px 0 20px;
  .found-music-nav {
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    .found-music-nav-item {
      display: block;
      text-decoration: none;
      color: ${props => ThemeColor[props.theme].public.titleColor};
      font-size: large;
    }
    .found-music-nav-item-active {
      font-size: larger;
      font-weight: 600;
      border-bottom: 3px solid ${props => ThemeColor[props.theme].public.messageColor};
    }
    
    &>*:not(last-child) {
      margin-right: 25px;
    }
  }

`