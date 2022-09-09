import styled from "@emotion/styled";
import { ThemeColor } from "../../../../../../../../common/css-var";

export const MioCreatePlaylistDiv = styled.div`
  width: 100%;
  text-align: center;
  .click,.forbid {
    display: inline-block;
    margin: 0px 10px 20px 10px;
    padding: 0 15px;
    border: 2px solid #4a4a4a;
    border-radius: 15px;
    cursor: pointer;
    user-select: none;
    :hover {
      background-color: #353535;
    }
  }
  .forbid {
    cursor: not-allowed;
  }
`