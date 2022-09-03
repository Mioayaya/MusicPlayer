import styled from "@emotion/styled";
import { ThemeColor } from "../../../../common/css-var";

export const MioFooterCardSongDiv = styled.div`
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  transform: ${props => props.cardShow ? 'translateY(18px)':'translateY(-33px)'};
  visibility: visible;
  transition: transform 0.5s;
  .down {
    flex: 1;
  }
  .btn-list {    
    flex: 2;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .model {
    flex: 3;
    display: flex;
    flex-direction: row;
    justify-content: space-around;    
    .model-menu {
      .option {
        padding-right: 15px;
      }      
      :hover {
        .type {
          display: block;
        }
      }
    }
    .type {
      display: none;
      position: absolute;
      background-color: #31333a;
      color: #737272;
      right: 0;
      top: -15px;
      height: 45px;
      margin-left: -5px;
      padding: 8px 0;
      border-radius: 10px;
      overflow-y: scroll;
      .type-item {
        padding: 3px 5px;
        :hover {
          background-color: #494547;
          color: #ffffff;
        }
      }
      .active {
        background-color: #494547;
        color: #ffffff;
      }
      ::-webkit-scrollbar {
        width: 0;
        height: 0;
        background-color: rgba(255,255,255,0);
      }
    }
  }

  .btn {
    margin: auto;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 18px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #544f4e;
    :hover {
      background-color: #2a2a2d;
    }
  }

  
`