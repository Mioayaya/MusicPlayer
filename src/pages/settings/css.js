import styled from "@emotion/styled";
import { ThemeColor } from "../../common/css-var";

export const MioSettingsDiv = styled.div`
  color: ${props => ThemeColor[props.theme].public.titleColor};
  height: 0;
  margin-left: 20px;
  margin-top: 20px;

  .bg {
    margin-top: 20px;
  }

  .opc {
    margin-top: 20px;
  }

  .title {
    font-size: 1.5rem;
  }

  .tit {
    padding-right: 20px;
  }

  .btn {
    user-select: none;
    cursor: pointer;
    color: ${props => ThemeColor[props.theme].public.btnColor};
    border: 1px solid ${props => ThemeColor[props.theme].public.titleColor};
    border-radius: 10px;
    padding: 5px 5px;
    margin-left: 10px;
    :hover {
      background-color: ${props => ThemeColor[props.theme].public.btnHover};;
    }
  }
`