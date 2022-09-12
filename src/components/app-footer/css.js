import styled from "@emotion/styled";
import { MioFooterCss,ThemeColor } from "../../common/css-var";

export const MioFooterDiv = styled.div`
  z-index: 20;
  height: ${MioFooterCss.height};
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 ${MioFooterCss.marginWidth} ${MioFooterCss.marginHeight} ${MioFooterCss.marginWidth};
  margin-bottom: ${MioFooterCss.marginHeight};
  background-color: ${ props => ThemeColor[props.theme].head };
  color: ${props => ThemeColor[props.theme].fontFooterColor2};
  border-top: 2px solid ${props => ThemeColor[props.theme].footerTop};
  border-end-end-radius: 10px;
  border-end-start-radius: 10px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 20px;

  .left {
    flex: 1;
    height: 60px;
    overflow: hidden;
    user-select: none;
    .tip {
      line-height: 60px;
    }
  }

  .player {
    flex: 2;
    height: 50px; 
    display: flex;
    flex-direction: row;
    justify-content: center;

  }

  .right {
    flex: 1;    
  }
`