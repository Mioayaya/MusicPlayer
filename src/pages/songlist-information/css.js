import styled from "@emotion/styled";
import { ThemeColor } from "../../common/css-var";


export const MioSonglistInformationDiv = styled.div`
  color: ${props => ThemeColor[props.theme].public.titleColor};  
  height: 0;

  .songlist-middle {
    margin-top: 20px;
    margin-left: 20px;
    
    .active {
      position: relative;
      font-size: larger;
      font-weight: 600;
      border-bottom: 3px solid ${props => ThemeColor[props.theme].messageColor};
      :hover {
        color: ${props => ThemeColor[props.theme].public.titleColor};
      }
    }

    span {
      user-select: none;
      :hover {
        color: ${props => ThemeColor[props.theme].public.lightColor};
      }
    }
    
    &>*:not(:last-child) {
      margin-right: 20px;
    }
  }

  .songlist-bottom {
    margin-top: 20px;
  }
  
  .loading {
    margin-top: 50px;
    text-align: center;    
  }
`