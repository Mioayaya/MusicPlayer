import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
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




const MioRecmdSongList = memo(() => {
  const dispatch = useDispatch();

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
      dispatch(setsongListId({id:0,index:0}));
    })
    // 空数组的原因 是每次重新进入页面时候，才刷新，减少网络请求
  },[])

  useEffect(() => {
    // 数据未显示的时候不请求 
    if(songListShowId !== 0) {
      // 如果请求过了的话就不请求
      // 因为要保证 data[current] 一定要有数据,所以先判断 空数组的 情况
      // 1. 首次加载 即 data.length = 0 一定会请求
      // 2. current(点击index) < data.length 则可能会有缓存数据
      //  2.1 如果 请求的 id 与 缓存的 id 相等 则不请求
      //  2.2 反之 请求
      // 3. 其它情况全部请求
      if(songListDetail.data.length == 0) {
        getSonglistDetail(songListShowId).then(res => {
          console.log('请求了',songListShowId );
          dispatch(setsongListDetail(res.playlist));
        })
      } else if(songListDetail.current < (songListDetail.data.length)) {
        if(songListShowId !== songListDetail.data[songListDetail.current].id) {
          getSonglistDetail(songListShowId).then(res => {
            console.log('请求了',songListShowId );
            dispatch(setsongListDetail(res.playlist));
          })
        }
      }else {
        getSonglistDetail(songListShowId).then(res => {
          console.log('请求了',songListShowId );
          dispatch(setsongListDetail(res.playlist));
        })
      }
      console.log(songListDetail.current,songListDetail.data.length);          
    }
  },[songListShowId])
  
  // 业务逻辑代码

  const showSonglistDetail = (id,index) => {
    // 传入一个 index 代表 当前 点击了哪个 歌单 
    // id 则是 歌单id
    dispatch(setsongListId({id:id,index:index}));
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
                             onDoubleClick={e => {alert('hhh')}}
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
        歌单详情
      </div>
    </MioRecmdSongListDiv>
  )
})

export default MioRecmdSongList