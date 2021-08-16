import styled from "styled-components";
import { BackgroundColor, Shadow, Theme } from "../../../constants/style";

export const TeamListWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  background: ${(props) =>
    props.theme === Theme.Dark
      ? BackgroundColor.Dark2
      : BackgroundColor.Light2};
  .teams-promote-playbook {
    padding: 0px 24px;
    box-sizing: border-box;
    .teams-promote-playbook-carousel {
      border-radius: 10px;
    }
  }
  .teams-filter {
    position: sticky;
    top: 0;
    box-sizing: border-box;
    z-index: 2;
    box-shadow: ${Shadow.Normal};
    background: ${(props) =>
      props.theme === Theme.Dark
        ? BackgroundColor.Dark2
        : BackgroundColor.Light2};
  }
  .teams-list {
    width: 100%;
    padding: 24px 12px 8px;
    box-sizing: border-box;
    background: ${(props) =>
      props.theme === Theme.Dark
        ? BackgroundColor.Dark1
        : BackgroundColor.Light1};
  }
`;
