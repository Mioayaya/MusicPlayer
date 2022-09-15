import styled from "@emotion/styled";
import { ThemeColor } from '../../common/css-var/index'

export const MioSearchDiv = styled.div`
  height: 0;
  margin-top: 20px;
  color: ${props => ThemeColor[props.theme].public.titleColor};  

  .title,.nav-bar {
    margin-left: 20px;
  }

  .title {
    font-size: 1.5rem;
  }

  .nav-bar {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    user-select: none;    
    &>*:not(:last-child) {
      margin-right: 20px;
    }
    .nav {
      cursor: pointer;
    }
    .active {
      font-weight: 600;
      border-bottom: 2px solid ${props => ThemeColor[props.theme].public.messageColor};
    }
  }
`