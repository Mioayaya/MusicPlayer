import styled from "@emotion/styled";
import { ThemeColor } from "../../../../common/css-var";

export const MioPlaylistDiv = styled.div`
  .title {
    user-select: none;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    .name {      
      color: ${props => ThemeColor[props.theme].public.darkColor};
    }
    .show {
      color: ${props => ThemeColor[props.theme].public.darkColor};
      font-size: smaller;
      display: block;
      position: absolute;
      left: 60px;
      transition: transform 0.5s ;
      transform: ${props => props.show?`rotate(90deg)`: 'none'};
    }
    .add {
      width: 20px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: larger;
      position: absolute;
      left: 200px;
    }
  }

  .playlist-list {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    .playlist-item {      
      color: ${props => ThemeColor[props.theme].public.titleColor};
      padding: 10px 0 10px 5px;
      user-select: none;
      border-radius: 5px;
      &:hover {
        color: ${props => ThemeColor[props.theme].public.lightColor};        
        background-color: ${props => ThemeColor[props.theme].content.listHover};
      }
      .icon {
        margin-right: 5px;
      }
    }
    .playlist-item.active {
      color: ${props => ThemeColor[props.theme].public.focusColor};
      background-color: ${props => ThemeColor[props.theme].content.listHover};
      &:hover {
        color: ${props => ThemeColor[props.theme].public.focusColor};
      }
    }
  }
`