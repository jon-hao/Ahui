import styled from "styled-components";
import { Color } from "../../../../../constants/style";

export const FilterWrapper = styled.div`
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  display: flex;
  .teams-filter-item {
    flex: 1;
    box-sizing: border-box;
    border-left: solid 1px ${Color.LightBorder};
    border-right: solid 1px ${Color.LightBorder};
  }
`;
