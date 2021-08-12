import styled from "styled-components";
import { Media, Shadow } from "../../../constants/style";

export const CardWrapper = styled.div`
  box-shadow: ${Shadow.Down1};
  box-sizing: border-box;
  height: 120px;
  width: 100%;
  ${Media.Mobile} {
    display: flex;
  }
  .card-image {
    ${Media.Desktop} {
      width: 100%;
      height: auto;
    }
    ${Media.Mobile} {
      flex: 0 0 120px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .card-content {
    padding: 12px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${Media.Mobile} {
      flex: auto;
    }
  }
`;
