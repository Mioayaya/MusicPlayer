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
      height: 15px;
      width: 15px;
      color: white;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }

  .bottom {
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
`