import styled from "@emotion/styled";
import { ThemeColor } from "../../../../../../common/css-var";

export const MioMineShowMiddleDiv = styled.div`
  margin-bottom: 20px;
  .nav-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    .nav-bar-item {
      color: ${props => ThemeColor[props.theme].public.titleColor};
      margin-right: 10px;
      font-size: 1rem;
      user-select: none;
      cursor: pointer;
      :hover {
        color: ${props => ThemeColor[props.theme].public.lightColor};
      }
    }
    .nav-bar-item.active {
      color: ${props => ThemeColor[props.theme].public.titleColor};
      font-size: 1.35rem;
      font-weight: 600;
      .border {
        align-self: center;
        margin: auto;
        width: 75%;
        height: 4px;
        border-radius: 3px;
        background-color: ${props => ThemeColor[props.theme].public.messageColor};
      }
    }
  }
`