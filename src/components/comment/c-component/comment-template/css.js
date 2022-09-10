import styled from "@emotion/styled";
import { ThemeColor } from "../../../../common/css-var";

export const MioCommentTemplateDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d4d4d4;
  margin-top: 50px;
  .title {
    /* width: 50%; */
    /* width: 100%; */
    width: ${props => props.commentWidth};
    font-weight: 600;
  }
  
  .comment-item {
    /* width: 50%; */
    /* width: 99%; */
    width: ${props => props.commentWidth};
    display: flex;
    flex-direction: row;
    padding: 10px 0;
    .item-main {
      flex: 1;
      .item-main-content {
        padding-bottom: 5px;
        word-break: break-all;
      }
    }

    .item-replied {
      display: flex;
      flex-direction: row;
      background-color: #333333;
      color: #8e8e8e;
      padding: 5px;
      border-radius: 10px;
      .item-replied-main {
        flex: 1;
      }
    }

    .item-avatar,.item-replied-avatar {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      padding-right: 10px;
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
      margin-bottom: 5px;
      cursor: pointer;
      :hover {
        color: #b3cee5;
      }
    }

    .item-main-time {
      color: #636363;
    }

    .deline-bar {
      height: 1px;      
      margin-top: 20px;
      background: linear-gradient(to left, #353535 0%,#555555 50%, #353535 100%);
    }
    
  }
`