import styled from "@emotion/styled";
import { ThemeColor } from "../../../../common/css-var";

export const MioSearchBaseDiv = styled.div`
  margin-top: 20px;

  .number-title {
    margin-left: 20px;
  }

  .arco-pagination {
    margin: 20px 0;    
    .arco-pagination-list {
      margin: auto;
      .arco-pagination-item {
        color: ${props => ThemeColor[props.theme].public.txtColor};
        border: 1px solid ${props => ThemeColor[props.theme].public.border};
        :hover {
          background-color: ${props => ThemeColor[props.theme].public.border};
        }
      }
      .arco-pagination-item-active {
        color: ${props => ThemeColor[props.theme].public.lightColor};
        background-color: ${props => ThemeColor[props.theme].public.messageColor};
        :hover {
          background-color: ${props => ThemeColor[props.theme].public.messageColor};
        }
      }
    }
  }

  .loading {
    text-align: center;
    line-height: 50px;
    height: 50px;
  }
`