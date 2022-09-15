import styled from "@emotion/styled";
import { ThemeColor } from "../../../common/css-var";

export const MioChangeClothsDiv = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin-left: 10px;

  .event {
    margin-top: 10px;
    .color {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      .item-cloths {
        width: 30%;
        aspect-ratio: 1 / 1;
        margin-right: 3%;
        position: relative;
        img {
          width: 100%;
          height: 100%;
          background-size: cover;
          object-fit: cover;
          border-radius: 10px;
        }
        .desc {
          width: 100%;
          position: absolute;
          bottom: 5px;
          text-align: center;
          background-color: rgba(0,0,0,0.4);
          border-radius: 10px;
        }
        .active {
          position: absolute;
          bottom: 5px;
          right: 0;
        }
      }
    }
  }

  .pure {
    .color {
      margin-top: 10px;
      display: flex;
      flex-wrap: wrap;
      .item-cloths {
        width: 22%;
        aspect-ratio: 1/1;
        margin-right: 3%;
        margin-bottom: 10px;
        border-radius: 5px;
        position: relative;
        .active {
          position: absolute;
          bottom: 0;
          right: 0;
        }
      }
    }
  }

  .item-cloths {
    cursor: pointer;
  }
  

  ::-webkit-scrollbar {
    width: 0;
    height: 0;
    background-color: rgba(255,255,255,0);
  }
`