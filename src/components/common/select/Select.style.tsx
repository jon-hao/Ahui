import styled from "styled-components";
import { TColor } from "../../../constants/color";
import { FontSize } from "../../../constants/style";

export const SelectWrapper = styled.div<TColor>`
  position: relative;
  height: 100%;
  width: 100%;
  font-size: ${FontSize.Text};
  .select-name {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .select-options {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: ${p => p.background.primary};
    box-shadow: ${p => p.shadow.primary};
    & > div {
      padding: 12px 18px;
      border-bottom: ${p => p.border};
      width: 72px;
      box-sizing: border-box;
    }
  }
`;
