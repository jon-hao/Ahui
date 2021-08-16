import styled from "styled-components";
import {
  BackgroundColor,
  FontSize,
  FontWeight,
  Color,
  Theme,
} from "../../../../../constants/style";

export const TeamListWrapper = styled.div`
  box-sizing: border-box;
  .team-detail {
    margin-bottom: 24px;
    border-radius: 8px;
    background: ${(props) =>
      props.theme === Theme.Dark
        ? BackgroundColor.Dark2
        : BackgroundColor.Light2};
    position: relative;
    .team-detail-type {
      position: absolute;
      top: 12px;
      right: 12px;
    }
    .team-detail-name {
      font-size: ${FontSize.Label};
      font-weight: ${FontWeight.Label};
    }
    .team-detail-people,
    .team-detail-reverse {
      font-size: ${FontSize.Text};
      color: ${(props) =>
        props.theme === Theme.Dark ? Color.DarkText : Color.LightText};
    }
    .team-detail-button {
      position: absolute;
      bottom: 12px;
      right: 12px;
      height: 30px;
      width: 30px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      svg {
        height: 20px;
        width: 20px;
        fill: ${(props) =>
          props.theme === Theme.Dark ? Color.DarkText : Color.LightText};
      }
    }
  }
`;
