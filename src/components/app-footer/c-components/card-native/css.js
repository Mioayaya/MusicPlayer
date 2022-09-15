import styled from "@emotion/styled";
import { ThemeColor } from "../../../../common/css-var";

export const MioFooterCardNativeDiv = styled.div`    
  display: flex;
  flex-direction: row;  
  /* position: ${props => props.cardShow ? 'absolute':'relative'}; */
  transform: ${props => props.cardShow ? 'translateY(30px)':'translateY(-25px)'};
  transition: transform 0.5s;
  color: ${props => ThemeColor[props.theme].footer.txtColor};
  cursor: default;
  .avatar {
      width: 50px;
      height: 50px;
      padding-right: 15px;
      position: relative;
      img {
        user-select: none;
        width: 100%;
        height: 100%;
        background-size: cover;
        border-radius: 20px;    
      }
      .up {
        position: absolute;
        user-select: none;
        left: 0;
        width: 50px;
        height: 50px;
        border-radius: 20px;
        font-size: 25px;
        font-weight: 600;
        line-height: 50px;
        text-align: center;
        background: rgba(0,0,0,0.5);
        display: none;
      }
      :hover {
        .up {
          display: inline;
        }
      }
    }
    .desc {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      
      .top {
        display: flex;
        flex-direction:row;
      }
      .title {   
        height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;      /* 超出部分省略号 */
        word-break: break-all;        /* break-all(允许在单词内换行。) */  
        display: -webkit-box;         /* 对象作为伸缩盒子模型显示 */
        -webkit-box-orient: vertical; // 设置或检索伸缩盒对象的子元素的排列方式
        -webkit-line-clamp: 1;        /* 显示的行数 */
      }
      .author {
        overflow: hidden;
        text-overflow: ellipsis;      /* 超出部分省略号 */
        word-break: break-all;        /* break-all(允许在单词内换行。) */  
        display: -webkit-box;         /* 对象作为伸缩盒子模型显示 */
        -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
        -webkit-line-clamp: 1;        /* 显示的行数 */
      }
    }
    .icon {
      font-size: large;
    }
`