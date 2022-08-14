import styled from "@emotion/styled";
import { ThemeColor } from "../../common/css-var";


export const MioSonglistInformationDiv = styled.div`
  color: ${props => ThemeColor[props.theme].songlistPageFontColor};
  height: 0;

  .songlist-middle {
    margin-top: 20px;
    margin-left: 20px;
    
    .active {
      position: relative;
      color: ${props => ThemeColor[props.theme].songlistPageFontColorTitle};
      font-size: larger;
      font-weight: 600;
      border-bottom: 3px solid ${props => ThemeColor[props.theme].messageColor};
      :hover {
        color: ${props => ThemeColor[props.theme].songlistPageFontColorTitle};
      }
    }

    span {
      color: ${props => ThemeColor[props.theme].songlistPageFontColorTitle};
      user-select: none;
      :hover {
        color: ${props => ThemeColor[props.theme].songlistPageFontColor};
      }
    }
    
    &>*:not(:last-child) {
      margin-right: 20px;
    }
  }

  .songlist-bottom {
    margin-top: 20px;
    margin-left: 20px;
  }
`