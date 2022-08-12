import styled from "@emotion/styled";
import { MioRecommendCss } from "../../../../../../common/css-var";

export const MioRecmdSongListDiv = styled.div`
  margin-top: ${MioRecommendCss.marginHeight};
  position: relative;
  .recmd-song-list-top {
    a{
      text-decoration: none;
      color: white;
    }
  }

  .recmd-song-list-content {
    top: 30px;
    position: absolute;
    left: 0px;
    right: 20px;
    aspect-ratio: 5 / 1;
    margin-left: 0;
    color: black;
    .test {
      color: white;
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  .swiper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
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

  .swiper-pagination-bullet {
    display: none;
  }
`
