import styled from '@emotion/styled'
import { ThemeColor } from '../../../common/css-var'

export const MioFoundMusicBannarDiv = styled.div`
  z-index: 0;
  .bannar {
    width: 50vw;
    height: 25vh;
    margin: auto;
    border-radius: 10px;    
  }

  .swiper {
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    border-radius: 10px;
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    user-select: none;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  // 小圆点颜色
  .swiper-pagination-bullet-active {
    background-color: ${props => ThemeColor[props.theme].public.messageColor};
  }
  // 按钮样式
  .swiper-button-prev,.swiper-button-next{
    color: ${props => ThemeColor[props.theme].public.btnBarnnar};
    &:hover {
      color: ${props => ThemeColor[props.theme].public.btnBarnnarHover};
    }
    ::after {
      font-size: 10px;
      background-color: ${props => ThemeColor[props.theme].public.btn};
      width: 25px;
      height: 25px;
      text-align: center;
      line-height: 25px;
      border-radius: 50%;
      display: ${props => props.swiperFlag?'block':'none' };
    }
  }
`