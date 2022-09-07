import styled from "@emotion/styled";
import { ThemeColor } from "../../../../common/css-var";

export const MioCommentTemplateDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d4d4d4;

  .title {
    width: 50%;
  }

  .comment-item {
    width: 50%;
    display: flex;
    flex-direction: row;
    .item-main {
      flex: 1;
    }

    .item-replied {
      display: flex;
      flex-direction: row;
      .item-replied-main {
        flex: 1;
      }
    }

    .item-avatar,.item-replied-avatar {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      img {
        width: 100%;
        height: 100%;
        background-size: cover;
        object-fit: contain;
        border-radius: 50%;
      }
    }

    .item-main-name,.item-replied-main-name {
      color: #85b9e6;
      cursor: pointer;
      :hover {
        color: #b3cee5;
      }
    }

    .item-main-time {
      color: #636363;
    }
    
  }
`