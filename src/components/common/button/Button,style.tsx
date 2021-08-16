import styled from "styled-components";
import {
  Theme,
  BackgroundColor,
  FontSize,
  Shadow,
  Color,
  FontWeight,
} from "../../../constants/style";

export const ButtonWrapper = styled.div`
  position: relative;
  background: ${(props) =>
    props.theme === Theme.Dark
      ? BackgroundColor.DarkButton
      : BackgroundColor.LightButton};
  font-size: ${FontSize.Button};
  color: ${Color.DarkTitle};
  padding: 8px 12px;
  box-shadow: ${Shadow.Down1};
  border-radius: 4px;
  font-weight: ${FontWeight.Text};
`;
