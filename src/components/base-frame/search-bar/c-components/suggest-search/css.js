import styled from "@emotion/styled";
import { ThemeColor } from "../../../../../common/css-var";

export const MioSearchSuggestDiv = styled.div`  
  width: 400px;
  height: 35vh;
  color: ${props => ThemeColor[props.theme].public.titleColor};
  background-color: ${props => ThemeColor[props.theme].header.card};
  border-radius: 5px;
  overflow-y: scroll;
  box-shadow: 0px 0px 5px ${props => ThemeColor[props.theme].public.shadow};
  display: ${props => props.showSuggest?'block':'none'};

  .search-item {
    margin-top: 10px;
    .title {
      padding-left: 20px;      
      color: ${props => ThemeColor[props.theme].public.txtColor};
    }
    .item-list {      
      cursor: pointer;
      padding: 10px 20px;
      :hover {
        background-color: ${props => ThemeColor[props.theme].public.emtHover};
      }
    }
  }

  .wait {
    color: ${props => ThemeColor[props.theme].public.titleColor};
    text-align: center;
    margin-top: 20%;
  }

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    background-color: rgba(255,255,255,0);
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    border-radius: 0.625rem;
    background-color: rgba(255,255,255,0);
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 0.625rem;
    background-color: ${ props => ThemeColor[props.theme].public.scrollColor};
  }
`