import styled from "@emotion/styled";

export const MioLoginDiv = styled.div`
  height: 0;
  color: white;
  margin: 20px 20px 0 20px;
  .login {
    width: 200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    .prcode {
      width: 200px;
      height: 200px;
      background-image: url("${props => props.Imgurl}");
    }
  }
`