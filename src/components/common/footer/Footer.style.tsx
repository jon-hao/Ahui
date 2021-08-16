import styled from "styled-components";
import {
  BackgroundColor,
  Color,
  FontSize,
  LineHeight,
  Shadow,
  Theme,
} from "../../../constants/style";

export const FooterWrapper = styled.footer`
  box-shadow: ${Shadow.Normal};
  flex: 0 0 56px;
  background: ${(props) =>
    props.theme === Theme.Dark
      ? BackgroundColor.Dark2
      : BackgroundColor.Light2};
  display: grid;
  grid-template-columns: repeat(4, minmax(56px, 1fr));
  grid-template-rows: repeat(1, minmax(56px, 1fr));
  place-items: center center;
  .footer-item {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    &.active {
      .footer-item-icon div svg {
        fill: ${(props) =>
          props.theme === Theme.Dark
            ? Color.DarkIconActive
            : Color.LightIconActive};
      }
      .footer-item-name {
        color: ${(props) =>
          props.theme === Theme.Dark
            ? Color.DarkTextActive
            : Color.LightTextActive};
      }
    }
    .footer-item-icon div svg {
      height: 24px;
      width: 24px;
      fill: ${(props) =>
        props.theme === Theme.Dark ? Color.DarkText : Color.LightText};
    }
    .footer-item-name {
      font-size: ${FontSize.Text};
      line-height: ${LineHeight.Text};
      color: ${(props) =>
        props.theme === Theme.Dark ? Color.DarkText : Color.LightText};
    }
  }
`;
