import styled from "@emotion/styled";
import { ThemeColor } from "../../../../common/css-var";

export const MioFooteerPlayerBarDiv = styled.div`
  flex: 1;
  height: 50px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  .top {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &>* {
      padding: 0 20px;
      user-select: none;
      cursor: pointer;
    }
    .icon  {
      height: 20px;
      width: 20px;
      color: white;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }

  .bottom {
    user-select: none;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    .now-time {  
    }
    .bar {
      display: block;
      height: 3px;
      width: 500px;
      padding: 0 5px;
      .arco-slider-road {
        :hover {
          ::before {
            height: 5px;
          }
          .arco-slider-bar {
            height: 5px;
          }    
          .arco-slider-button {
            visibility: visible;
          }
        }
        ::before {
          height: 3px;
          background-color: #4c4c4e;
        }
      }
      .arco-slider-bar {
        height: 3px;
        background-color: #ec4141;
      }
      .arco-slider-button {
        visibility: hidden;
        ::after {
          background-color: #ec4141;
          border: none;
        }
      }
    }
    .end-time {      
    }
  }

  .menu-list {
    position: absolute;
    right: 20px;
    top: 25px;
    font-size: larger; 
    .menu-sound {
      position: relative;
      cursor: pointer;      
      .volume-slider {
        display: none;
        position: absolute;
        bottom: 20px;
        left: -5px;
        height: 100px;
        width: 30px;
        background-color: #252525;
        border: 1px solid #303030;
        .arco-slider-road.arco-slider-road-vertical {
          margin: 10px 0;
          min-height: 80px;
        }
        .arco-slider-road::before {
          width: 3px;
          background-color: #4c4c4e;
        }
        .arco-slider-bar {
          width: 3px;
          background-color: #ec4141;
        }
        .arco-slider-button::after {
          border: none;
          background-color: #ec4141;
        }
      }
      :hover {
        .volume-slider {
          display: block;
        }
      }
    }
    .menu-play-list {
      user-select: none;
      cursor: pointer;
      font-size: 20px;    
      margin-left: 10px;
    }
    .icon  {
      height: 20px;
      width: 20px;
      color: white;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }

  }
`