import React, { memo } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from 'react';
import { useRef } from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";


import { getTopBanner } from '../../../axios/server/foundMusic';
import { getBanner } from '../../../store/slices/found-music/foundMusicSlice';
import { MioFoundMusicBannarDiv } from './css'



const MioFoundMusicBannar = memo(() => {
  const dispatch = useDispatch();
  const foundMusicSlice = useSelector(state => state.foundMusicSlice.topBanners);

  // 按钮是否显示
  const [ buttonFlag,setButtonFlag ] = useState(false);

  const bannarRef = useRef();
  useEffect(() => {
    // 获取轮播图
    getTopBanner().then(res => {
      // res.banners
      // state.topBanners.push(res.banners);
      dispatch(getBanner(res.banners));
    })    
  }, [])

  return (
    <MioFoundMusicBannarDiv swiperFlag={buttonFlag}>
      <div className="bannar" 
           onMouseEnter={e => setButtonFlag(true)} 
           onMouseLeave={e => setButtonFlag(false)} 
           ref={bannarRef}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Navigation,Autoplay]}
          className="mySwiper"
        >
          {
            foundMusicSlice.map((item,index) => {
              return (
                <SwiperSlide key={item.targetId?item.targetId:index+335}
                             onClick={e=>{console.log(123);}}
                >
                  <img src={item.imageUrl} alt="typeTitle" />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </MioFoundMusicBannarDiv>
  )
})

export default MioFoundMusicBannar