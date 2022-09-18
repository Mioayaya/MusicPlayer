import axios from 'axios';
import React, { memo } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Pagination } from '@arco-design/web-react';

import { getSearchRes } from '../../../../axios/server/search';
import { MioSearchBaseDiv } from './css'

import MioLayoutBlockList from '../../../../components/layout/block-list';
import { useSelector } from 'react-redux';

const MioSearchBase = memo((props) => {
  const {routerData,type,nameType} = props;
  const theme = useSelector(state => state.themeSlice.theme);
  const [resArr,setResArr] = useState([]);
  const [offset,setOffset] = useState(0);
  const [total,setTotal] = useState(-1);
  const [page,setPage] = useState(1);
  const Limit = 20;

  useEffect(() => {
    if(routerData) {
      axios.get(getSearchRes(routerData,Limit,offset,type)).then(res => {
        if(nameType=='歌手') {
          setTotal(res.data.result.artistCount);
          setResArr(res.data.result.artists)
        }else if(nameType=='专辑') {
          setTotal(res.data.result.albumCount);
          setResArr(res.data.result.albums);
        }else if(nameType=='歌单') {          
          setTotal(res.data.result.playlistCount);
          setResArr(res.data.result.playlists);
        }else if(nameType=='用户') {          
          setTotal(res.data.result.userprofileCount);
          setResArr(res.data.result.userprofiles);
        }
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
    <MioSearchBaseDiv theme={theme}>
      {
        total == -1 
        &&
        <div className="loading">···加载中···</div>
      }
      {
        (total == 0 || !total)
        &&
        <div className="loading">肥肠抱歉TT暂未找到 "<strong>{routerData}</strong>" 相关的{nameType}</div>
      }
      {
        total>0
        &&
        <div className="number-title">{'共: '+total+' 条搜索结果'}</div>
      }

      {
        total>0
        && 
        <MioLayoutBlockList resArr={resArr} type={nameType}/>
      }

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
    </MioSearchBaseDiv>
  )
})

export default MioSearchBase