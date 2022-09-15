import styled from "@emotion/styled";
import { ThemeColor } from "../../common/css-var";

export const MioSpaceUidDiv = styled.div`
  color: ${props => ThemeColor[props.theme].public.lightColor};
  height: 0;
  padding: 0 20px;
`