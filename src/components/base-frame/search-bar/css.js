import styled from "@emotion/styled";
import { MioSearchBarCss,ThemeColor } from '../../../common/css-var'

export const MioSearchBarDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: ${MioSearchBarCss.radus};
  position: relative;
  .search-bar-icon {
    position: absolute;
    color: ${ props => ThemeColor[props.theme].searchIcon };
    left: calc((35px - 24px) / 2);
    top: calc((35px - 24px) / 2);
    &:hover {
      color: ${ props => ThemeColor[props.theme].searchIconHover };
    }
  }

  .icon {
    width: 1.5em; 
    height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
  
  .suggest {
    position: absolute;
    width: 400px;
    height: 35vh;
    background-color: #363636;
    top: 70px;
    left: -80px;
    border-radius: 5px;
    display: ${props => props.showSuggest?'block':'none'};
  }

  .search-bar-input {
    background-color: ${ props => ThemeColor[props.theme].searchBar };
    height: ${MioSearchBarCss.height};
    width: ${MioSearchBarCss.width};
    line-height: ${MioSearchBarCss.height};
    font-size: ${MioSearchBarCss.fontsize};
    color: ${ props => ThemeColor[props.theme].fontHeadColor1 };
    border-radius: ${MioSearchBarCss.radus};
    border: none;
    outline: none;
    padding-inline-start: 35px;
    padding-inline-end: 20px;
    &::-webkit-input-placeholder {
      color: ${ props => ThemeColor[props.theme].fontHeadColor3 };
    }
  }
`