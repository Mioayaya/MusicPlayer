import axios from 'axios';
import React, { memo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Pagination } from '@arco-design/web-react';

import { getSearchRes } from '../../../../axios/server/search';
import { MioSearchSongDiv } from './css'

import MioLayoutSongList from '../../../../components/layout/songs-list';

const MioSearchSong = memo((props) => {
  const {routerData,type} = props;
  const [resArr,setResArr] = useState([]);
  const [offset,setOffset] = useState(0);
  const [total,setTotal] = useState(0);
  const [page,setPage] = useState(1);
  const Limit = 50;

  useEffect(() => {
    if(routerData) {
      axios.get(getSearchRes(routerData,Limit,offset,type)).then(res => {
        setTotal(res.data.result.songCount);
        setResArr(res.data.result.songs)
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
    <MioSearchSongDiv>
      {
        resArr.length!=0
        &&
        <div className="number-title">{'共: '+total+' 首'}</div>
      }
      {
        resArr.length!=0
        ? <MioLayoutSongList songList={resArr} offset={offset}/>
        : <div className="loading">加载中</div>
      }

      {/* 分页 */}
      {
        resArr.length!=0
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