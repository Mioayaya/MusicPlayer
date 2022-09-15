import styled from "@emotion/styled";
import { ThemeColor } from "../../common/css-var";

export const MioLoginDiv = styled.div`
  height: 0;
  color: ${props => ThemeColor[props.theme].public.lightColor};
  margin: 20px 20px 0 20px;
  .login {
    color: ${props => ThemeColor[props.theme].public.darkColor};
    width: 200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    .prcode {
      width: 200px;
      height: 200px;
      background-image: url("${props => props.Imgurl}");
      background-size: cover;
    }
  }
`