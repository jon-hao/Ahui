import styled from "styled-components";
import { BackgroundColor, FontSize, FontWeight } from "../../constants/style";

export const TeamListWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  background: ${(props) =>
      props.theme ? BackgroundColor.Dark2 : BackgroundColor.Light2};
  .teams-nav {
    padding: 48px 24px 24px;
    width: 100%;
    box-sizing: border-box;
    font-size: ${FontSize.Title};
    font-weight: ${FontWeight.Title};
  }
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
    padding: 0px 24px;
    box-sizing: border-box;
    background: ${(props) =>
      props.theme ? BackgroundColor.Dark2 : BackgroundColor.Light2};
  }
  .teams-list {
    width: 100%;
    padding: 24px 12px 8px;
    box-sizing: border-box;
    background: ${(props) =>
      props.theme ? BackgroundColor.Dark1 : BackgroundColor.Light1};
  }
`;
