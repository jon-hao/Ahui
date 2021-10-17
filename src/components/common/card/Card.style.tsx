import styled from "styled-components";
import { BreakPoint } from "../../..";
import { TColor } from "../../../constants/color";

export const CardWrapper = styled.div<TColor>`
  box-shadow: ${p => p.shadow.primary};
  box-sizing: border-box;
  height: 120px;
  width: 100%;
  ${BreakPoint.Mobile} {
    display: flex;
  }
  .card-image {
    ${BreakPoint.Desktop} {
      width: 100%;
      height: auto;
    }
    ${BreakPoint.Mobile} {
      flex: 0 0 120px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .card-content {
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${BreakPoint.Mobile} {
      flex: auto;
    }
  }
`;
