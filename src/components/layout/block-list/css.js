import styled from "@emotion/styled";
import { ThemeColor } from "../../../common/css-var";

export const MioLayoutBlockListDiv = styled.div`
  display: flex;
  flex-direction: column;
  .block-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;
    :hover {
      background-color: #414141;
    }

    .left {
      flex: 2;
      display: flex;
      flex-direction: row;
      align-items: center;
      .avatar {
        margin-left: 20px;
        width: 50px;
        height: 50px;
        img {
          width: 100%;
          height: 100%;
          background-size: cover;
          object-fit: cover;
          border-radius: 10px;
        }
      }
      .item-name {
        margin-left: 10px;
      }
      .alia {
        margin-left: 10px;
        color: #666666;
      }
    }
    .middle {
      flex: 1;
    }
    .right {
      flex: 1;
    }
  }

  &>:nth-child(2n+1) {
    background-color: #333333;
    :hover {
      background-color: #474747;
    }
  }
`