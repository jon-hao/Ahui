import styled from "styled-components";
import { Shadow } from "../../constants/style";

export const TeamListWrapper = styled.div`
  height: 100%;
  width: 100%;
  .team-detail {
    margin: 12px;
    padding: 12px;
    box-shadow: ${Shadow.Down1};
    box-sizing: border-box;
  }
`;
