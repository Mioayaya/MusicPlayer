import axios from 'axios';
import React, { memo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { getSearchSuggest } from '../../../axios/server/search';
import { setUserCounter } from '../../../store/slices/user-inform';
import { setNavKey } from '../../../store/slices/content-left'
import MioSearchSuggest from './c-components/suggest-search';

import { MioSearchBarDiv } from './css';

// 接受一个全局的 redux
const theme = 'dark';

const MioSearchBar = memo(() => {
  const histort = useHistory();
  const dispatch = useDispatch();
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
    if(searchValue) {
      histort.push({
        pathname: '/search',
        search: `?keywords=${searchValue}`
      })
      setShowSuggest(false);
      dispatch(setUserCounter());
      dispatch(setNavKey(99998));
    }
  }

  const inputOnchange = (e) => {
    setSerachValue(e.target.value);
    setShowSuggest(true);
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
               onChange={e => inputOnchange(e)}
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