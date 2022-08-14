import React, { memo } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import { MioRecmdSongListDiv } from './css'
import { clickNav, setRecmdSongList, setsongListId,setsongListDetail } from '../../../../../../store/slices/found-music/foundMusicSlice';
import { useEffect } from 'react';
import { getPersonalized, getSonglistDetail } from '../../../../../../axios/server/foundMusic';
import calculatePlayNumber from '../../../../../../utils/calculatePlayNumber';
import MioLoadingLeft from '../../../../../../components/loading/loading-left';
import MiosonglistDetail from './songlistDetail';




const MioRecmdSongList = memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();

  // 获取推荐歌单信息
  const recmdSongList = useSelector(state => state.foundMusicSlice.recmdSongList);
  // 获取展示的歌单信息的歌单id
  const songListShowId = useSelector(state => state.foundMusicSlice.songListId);
  // 歌单详细信息
  const songListDetail = useSelector(state => state.foundMusicSlice.songListDetail);


  useEffect(() => {
    // 获取歌单
    getPersonalized(8).then(res => {
      dispatch(setRecmdSongList(res.result));
      dispatch(setsongListId({id:0}));
    }).catch(err => {
      console.log(err);
    })
    // 空数组的原因 是每次重新进入页面时候，才刷新，减少网络请求
  },[])

  useEffect(() => {
    // 数据未显示的时候不请求 
    if(songListShowId !== 0) {
      getSonglistDetail(songListShowId).then(res => {
        // console.log('请求了',showid );
        dispatch(setsongListDetail(res.playlist));
      })

      // 打印点击 current 和 当前 data数组长度
      // console.log(songListDetail.current,songListDetail.data.length);         
    }
  },[songListShowId])
  
  // 业务逻辑代码

  const showSonglistDetail = (id) => {
    // 传入一个 index 代表 当前 点击了哪个 歌单 
    // id 则是 歌单id
    dispatch(setsongListId({id:id}));
  }

  const gotoSonglistInformation = (id) => {
    history.push({
      pathname: '/songlistInfomation',
       search: `?id=${id}`,
       //search:`?${encodeURI(JSON.stringify(record))}` 如果传递的是对象，需要对对象进行url编码不然解码会报错
    })
  }


  return (
    <MioRecmdSongListDiv>
      <div className="recmd-song-list-top">
        <NavLink to='foundmusic/songlist'
                 onClick={ e => {dispatch(clickNav(12))}}
        >
          {'推荐歌单 >'}
        </NavLink>  
      </div>

      <div className="recmd-song-list-content">
        <Swiper
          slidesPerView={5}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {
            recmdSongList.map((item,index) => {
              return (
                <SwiperSlide key={item.id}
                             onClick={e => {showSonglistDetail(item.id,index)}}
                             onDoubleClick={e => {gotoSonglistInformation(item.id)}}
                >
                  <img src={item.picUrl} alt={item.name}/>
                  <span className="number">▷ {calculatePlayNumber(item.playCount)}</span>
                  <span className="icon">▶</span>
                  <span className="name">{item.name}</span>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
      
      <div className="recmd-song-list-bottom">
        
        {
          // 首先判断是数组是否为空 其次还要判断是否需要加载
          // 判断 data数据是否 == null
          
          songListDetail
          ? songListShowId == songListDetail.id 
            ? <MiosonglistDetail songListDetail={songListDetail} />
            : <div className='recmd-song-list-bottom-loading'><MioLoadingLeft height='350px' /></div>
          : <div className='recmd-song-list-bottom-loading'><MioLoadingLeft height='350px' /></div>
        }
        
      </div>
    </MioRecmdSongListDiv>
  )
})

export default MioRecmdSongList