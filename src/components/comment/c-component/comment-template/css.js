import styled from "@emotion/styled";
import { ThemeColor } from "../../../../common/css-var";

export const MioCommentTemplateDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #d4d4d4;
  color: ${props => ThemeColor[props.theme].public.titleColor};
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
      background-color: ${props => ThemeColor[props.theme].content.replied};            
      color: ${props => ThemeColor[props.theme].public.txtColor};
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
      color: ${props => ThemeColor[props.theme].public.linkColor};
      margin-bottom: 5px;
      cursor: pointer;
      :hover {
        color: ${props => ThemeColor[props.theme].public.linkHover};
      }
    }

    .item-main-time {
      color: ${props => ThemeColor[props.theme].content.commentTime};
    }

    .deline-bar {
      height: 1px;      
      margin-top: 20px;
      background: ${props => ThemeColor[props.theme].content.commentLiner};
    }
    
  }
`