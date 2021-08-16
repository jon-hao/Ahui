import styled from "styled-components";
import {
  BackgroundColor,
  Color,
  FontSize,
  FontWeight,
  Theme,
} from "../../../constants/style";

export const HeaderWrapper = styled.header`
  flex: 0 0 106px;
  padding: 36px 24px 20px;
  width: 100%;
  box-sizing: border-box;
  font-size: ${FontSize.Title};
  font-weight: ${FontWeight.Title};
  background: ${(props) =>
    props.theme === Theme.Dark
      ? BackgroundColor.Dark2
      : BackgroundColor.Light2};
  color: ${(props) =>
    props.theme === Theme.Dark ? Color.DarkTitle : Color.LightTitle};
  display: flex;
  justify-content: space-between;
  .header-setting {
    & > div {
      display: inline-block;
      margin-left: 8px;
      svg {
        height: 32px;
        width: 32px;
      }
    }
  }
`;
