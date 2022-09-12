import styled from "@emotion/styled";
import { ThemeColor } from "../../../../../common/css-var";

export const MioSearchSuggestDiv = styled.div`  
  width: 400px;
  height: 35vh;
  background-color: #363636;
  border-radius: 5px;
  overflow-y: scroll;
  box-shadow: 0px 0px 5px #121212;  
  display: ${props => props.showSuggest?'block':'none'};

  .search-item {
    margin-top: 10px;
    .title {
      padding-left: 20px;
      color: #8d8d8d;
    }
    .item-list {      
      cursor: pointer;
      padding: 10px 20px;
      :hover {
        background-color: #222222;
      }
    }
  }

  .wait {
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
    background-color: ${ props => ThemeColor[props.theme].scrollColor};
  }
`