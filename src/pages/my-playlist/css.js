import styled from "@emotion/styled";
import { ThemeColor } from "../../common/css-var";

export const MioMyPlaylistDiv = styled.div`
  color: ${props => ThemeColor[props.theme].songlistPageFontColor};
  height: 0;
`