import styled from "styled-components";
import {
  BackgroundColor,
  Color,
  FontSize,
  Shadow,
} from "../../../constants/style";

export const SelectWrapper = styled.div`
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
    background: ${BackgroundColor.Light2};
    box-shadow: ${Shadow.Down2};
    & > div {
      padding: 12px 18px;
      border-bottom: solid 1px ${Color.LightBorder};
      width: 72px;
      box-sizing: border-box;
    }
  }
`;
