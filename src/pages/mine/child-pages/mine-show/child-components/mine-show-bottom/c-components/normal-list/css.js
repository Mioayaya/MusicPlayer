import styled from "@emotion/styled";
import { ThemeColor } from "../../../../../../../../common/css-var";

export const MioNormalListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;  
  flex-wrap: wrap;
  .item {
    width: 18%;
    position: relative;
    margin-bottom: 80px;
    .img {
      width: 100%;
      aspect-ratio: 1 / 1;
      border-radius: 2%;
      user-select: none;
      img {
        width: 100%;
        height: 100%;
        background-size: cover;
        object-fit: cover;
        border-radius: 2%;
      }
    }
    .name {
      position: absolute;
      left: 0;
      overflow: hidden;
      text-overflow: ellipsis;      /* 超出部分省略号 */
      word-break: break-all;        /* break-all(允许在单词内换行。) */  
      display: -webkit-box;         /* 对象作为伸缩盒子模型显示 */
      -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
      -webkit-line-clamp: 2;        /* 显示的行数 */
    }
    .play-count {
      user-select: none;
      position: absolute;
      background-color: rgba(0,0,0,0.4);
      border-radius: 10px;
      top: 0;
      right: 0;
      padding: 0 5px;
      font-size: small;
      margin: 3px 5px;
    }
    .icon {
      user-select: none;
      position: absolute;
      left: 0;
      top: 0;
      color: red;
      width: 25px;
      height: 25px;
      line-height: 25px;
      text-align: center;
      background-color: white;
      border-radius: 50%;
      margin: 5px;
      opacity: 0;
      transition: opacity 1s;
    }
    .number {
      user-select: none;
      position: absolute;
      background-color: rgba(0,0,0,0.4);
      border-radius: 10px;
      bottom: 5px;
      right: 0;
      padding: 0 5px;
      font-size: small;
      margin: 3px 5px;
      opacity: 0;
      transition: opacity 1s;
    }
    :hover {
      cursor: pointer;
      .icon,.number {
        opacity: 1;
      }
    }
  }
  .nlast {
    margin-right: 2%;
  }
`