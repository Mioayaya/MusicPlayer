import axios from 'axios';
import React, { memo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Pagination } from '@arco-design/web-react';

import { getSearchRes } from '../../../../axios/server/search';
import { MioSearchSongDiv } from './css'

import MioLayoutSongList from '../../../../components/layout/songs-list';
import { useSelector } from 'react-redux';

const MioSearchSong = memo((props) => {
  const {routerData,type} = props;
  const theme = useSelector(state => state.themeSlice.theme);
  const [resArr,setResArr] = useState([]);
  const [offset,setOffset] = useState(0);
  const [total,setTotal] = useState(-1);
  const [page,setPage] = useState(1);  
  const Limit = 50;

  useEffect(() => {
    if(routerData) {
      axios.get(getSearchRes(routerData,Limit,offset,type)).then(res => {
        setTotal(res.data.result.songCount);
        setResArr(res.data.result.songs);        
      })
    }
    return () => {
      setResArr([]);
    }
  },[routerData,offset])

  const pageOnChange = (pageNumber) => {
    setOffset(Limit*(pageNumber-1));
    setPage(pageNumber);
  }

  return (
    <MioSearchSongDiv theme={theme}>
      {
        total == -1 
        &&
        <div className="loading">···加载中···</div>
      }
      {
        total == 0
        &&
        <div className="loading">肥肠抱歉TT暂未找到 "<strong>{routerData}</strong>" 相关的歌曲</div>
      }
      {
        total>0
        &&
        <div className="number-title">{'共: '+total+' 首'}</div>
      }
      {
        total>0
        && 
        <MioLayoutSongList songList={resArr} offset={offset}/>        
      }
      {/* 分页 */}
      {
        total>0
        &&
        <Pagination total={total}                   
                    bufferSize={1}
                    pageSize={Limit}
                    onChange={(pageNumber,pageSize) => pageOnChange(pageNumber)}
                    defaultCurrent={page}
        />
      }

    </MioSearchSongDiv>
  )
})

export default MioSearchSong