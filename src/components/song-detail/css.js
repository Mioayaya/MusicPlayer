import styled from "@emotion/styled";
import { ThemeColor } from "../../common/css-var";

export const MioSongDetailDiv = styled.div`
  width: 100%;
  height: 100%;
  transform: ${props => props.show?'translateY(0px)':'translateY(100vh)'};
  transition: 0.5s;
`