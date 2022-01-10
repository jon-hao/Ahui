import styled from "styled-components";

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  .container-header {
    height: 11vh;
    padding: 0 48px 36px;
    box-sizing: border-box;
    font-size: 40px;
    line-height: 40px;
    font-weight: 500;
    display: flex;
    align-items: flex-end;
  }
  .container-bodyer {
    width: 100%;
    padding: 24px 48px;
    box-sizing: border-box;
  }
  .container-absolute {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default ContainerWrapper;
