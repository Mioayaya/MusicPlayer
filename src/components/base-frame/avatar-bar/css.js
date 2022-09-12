import styled from '@emotion/styled'
import { ThemeColor } from '../../../common/css-var'

export const MioAvatarBarDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${ props => ThemeColor[props.theme].fontHeadColor2 };

  &>*:not(last-child) {
    margin-right: 20px;
  }

  .avatar-bar-avatar {
    height: auto;
    width: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    user-select: none;

    .item {
      margin-left: 5px;
      
      &:hover{
        color: ${ props => ThemeColor[props.theme].fontHeadColor1 };
        cursor: pointer;
      }
    }
    
    .avatar {
      width: 30px;
      height: 30px;
      transition: 0.5s;
      position: relative;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-size: cover;
        object-fit: cover;
        cursor: pointer;      
      }
      .mini-inform {
        position: absolute;
        background-color: red;
        background-color: #363636;
        border-radius: 5px;
        box-shadow: 0px 0px 5px #121212;
        top: 25px;
        left: -50px;
        width: 130px;
        height: 150px;
        z-index: -1;
        visibility: hidden;
        opacity: 0;
        transition: 0.5s;
        .top {
          margin-top: 20px;
          text-align: center;
          color: #ff758f;
        }
        .middle {
          margin-top: 2.5px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;          
          scale: 0.7;        
          &>* {
            display: flex;
            flex-direction: column;
            align-items: center;            
          }
        }
        .bottom {
          margin: 5px;
          .self,.singout {                        
            display: flex;
            flex-direction: row;
            justify-content: space-between;            
            &>* {
              scale: 0.75;
            }
            :hover {
              background-color: #414141;
            }
          }
        }
      }
      :hover {
        scale: 2;
        transform: translate(-10px,10px);
        .mini-inform {
          visibility: visible;
          opacity: 1;
        }

      }
    }
  }

  .icon {
    width: 1.5em; 
    height: 1.5em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    color: ${ props => ThemeColor[props.theme].fontHeadColor2 };
    &:hover {
      color: ${ props => ThemeColor[props.theme].fontHeadColor1 };
      cursor: pointer;
    }
  }
  
`