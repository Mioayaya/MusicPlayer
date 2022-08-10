import React, { memo } from 'react'
import styled from '@emotion/styled'

import { MioSearchBarCss,ThemeColor } from '../../../common/css-var'

// 接受一个全局的 redux
const theme = 'dark';

const MioSearchBarDiv = styled.div`
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

const MioSearchBar = memo(() => {
  return (
    <MioSearchBarDiv theme={theme}>
      <svg className="search-bar-icon icon" aria-hidden="true">
        <use xlinkHref="#icon-sousuo1"></use>
      </svg>
      <input className='search-bar-input' 
             type="search" 
             autoComplete="off" 
             spellCheck="false" 
             role="combobox" 
             placeholder="beautiful world - 宇多田光" 
             aria-live="polite">
      </input>
    </MioSearchBarDiv>
  )
})

export default MioSearchBar