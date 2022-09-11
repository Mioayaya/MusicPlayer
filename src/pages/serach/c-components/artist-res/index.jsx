import axios from 'axios';
import React, { memo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Pagination } from '@arco-design/web-react';

import { getSearchRes } from '../../../../axios/server/search';
import {MioSearchArtistDiv} from './css'
import MioLayoutBlockList from '../../../../components/layout/block-list';

const MioSearchArtist = memo((props) => {
  const {routerData,type} = props;
  const [resArr,setResArr] = useState([]);
  const [offset,setOffset] = useState(0);
  const [total,setTotal] = useState(0);
  const [page,setPage] = useState(1);
  const Limit = 20;

  useEffect(() => {
    if(routerData) {
      axios.get(getSearchRes(routerData,Limit,offset,type)).then(res => {
        setTotal(res.data.result.artistCount);
        setResArr(res.data.result.artists)
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
    <MioSearchArtistDiv>
      <div className="number-title">{'共: '+total+' 条搜索结果'}</div>

      {
        resArr.length!=0
        ? <MioLayoutBlockList resArr={resArr} type='歌手'/>
        : <div className="loading">加载中</div>
      }

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
    </MioSearchArtistDiv>
  )
})

export default MioSearchArtist