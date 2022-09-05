import styled from "@emotion/styled";
import { ThemeColor } from "../../../../common/css-var";

export const MioSongDetailNormalDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #2b2b2b;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
    background-color: rgba(255,255,255,0);
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    border-radius: 0.625rem;
    background-color: rgba(255,255,255,0);
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    border-radius: 0.625rem;
    background-color: ${ props => ThemeColor[props.theme].scrollColor};
  }
`

export const MioSongDetailNormalTopDiv = styled.div`
  display: flex;
  flex-direction: column;
  cursor: default;
  margin-top: 50px;
  
  .top-tools {
    user-select: none;    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50px;
    z-index: 1;
    background-color: #2b2b2b;
    .down {
      cursor: pointer;
      width: 20px;
      height: 20px;
      font-size: 20px;
      margin: 10px;
      padding: 5px;
    }
  }

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #636363;
    .song-name {
      font-size: 1.5rem;
      color: #d0d0d0;
      padding: 5px 0;
    }
    .song-name-desu {
    }
    .song-author {
    }
    .al,.ar {
      :hover {
        cursor: pointer;
        color: #244e7b;
      }
    }
  }
  
  .top-content {
    margin-top: 20px;
    display: flex;
    flex-direction: row;    
    height: 45vh;
    .content-pic {
      flex: 3;
      align-self: center;
      user-select: none;      
      .pic {
        width: 15vw;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        margin: auto;
        animation:fadenum 18000s infinite;
        animation-play-state: ${props => props.aniPlay?'running':'paused'};
        @keyframes fadenum{
          100%{transform:rotate(360000deg);}
        }
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-size: cover;
          object-fit: cover;
        }
      }
    }
    .content-iyrics {
      flex: 4;
      height: 100%;
      position: relative;
    }
    .content-others {
      flex: 3;
    }
  }
  
`