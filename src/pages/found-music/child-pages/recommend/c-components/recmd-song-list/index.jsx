import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";

import { MioRecmdSongListDiv } from './css'
import { clickNav, getRecmdSongList } from '../../../../../../store/slices/found-music/foundMusicSlice';
import { useEffect } from 'react';
import { getPersonalized } from '../../../../../../axios/server/foundMusic';




const MioRecmdSongList = memo(() => {
  const dispatch = useDispatch();

  // 获取推荐歌单信息
  const recmdSongList = useSelector(state => state.foundMusicSlice.recmdSongList);

  useEffect(() => {
    getPersonalized(8).then(res => {
      dispatch(getRecmdSongList(res.result));
    })
  },[])
  
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
            recmdSongList.map(item => {
              return (
                <SwiperSlide key={item.id}>
                  {item.name}
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>

    </MioRecmdSongListDiv>
  )
})

export default MioRecmdSongList