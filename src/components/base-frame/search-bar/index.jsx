import axios from 'axios';
import React, { memo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getSearchSuggest } from '../../../axios/server/search';
import MioSearchSuggest from './c-components/suggest-search';

import { MioSearchBarDiv } from './css';

// 接受一个全局的 redux
const theme = 'dark';

const MioSearchBar = memo(() => {
  const [searchValue,setSerachValue] = useState('');
  const [suggestObj,setSuggestObj] = useState({});
  const [showSuggest,setShowSuggest] = useState(false);

  const clickEvent = (e) => {
    if (!e.target.className.includes("suggest") && !e.target.className.includes("search-bar-input")) {
      setShowSuggest(false);
      window.removeEventListener("click", clickEvent, true);
    }
  };

  useEffect(() => {
    if (showSuggest) {
      window.addEventListener("click", clickEvent, true);
    } else {
      window.removeEventListener("click", clickEvent, true);
    }
  }, [showSuggest]);

  // 0.5s提示搜索，节流
  useEffect(() => {
    const t = setTimeout(() => {
      suggestSearch();      
    },500)
    return () => {
      clearTimeout(t);
      setSuggestObj({});
    }
  },[searchValue])

    const suggestSearch = async () => {   
    if(searchValue) {
      const res = await axios.get(getSearchSuggest(searchValue));
      setSuggestObj(res.data.result);
    } 
  }


  const searchSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <MioSearchBarDiv theme={theme} showSuggest={showSuggest}>
      <svg className="search-bar-icon icon" aria-hidden="true">
        <use xlinkHref="#icon-sousuo1"></use>
      </svg>
      <form action="" onSubmit={e => searchSubmit(e)}>        
        <input className='search-bar-input' 
               type="search" 
               autoComplete="off" 
               spellCheck="false" 
               role="combobox" 
               placeholder="beautiful world - 宇多田光" 
               aria-live="polite"
               onChange={e => setSerachValue(e.target.value)}
               onFocus={e => setShowSuggest(true)}
        />
      </form>

      <div className="suggest">
        <MioSearchSuggest theme={theme} suggestObj={suggestObj} showSuggest={showSuggest}/>
      </div>

    </MioSearchBarDiv>
  )
})

export default MioSearchBar