import styled from "styled-components";
import { FontSize, FontWeight } from "../../constants/style";

export const TeamListWrapper = styled.div`
  width: 100%;
  height: 100%;
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
  .team-list {
    height: 100%;
    width: 100%;
    padding: 12px;
    overflow-x: auto;
    box-sizing: border-box;
  }
`;
