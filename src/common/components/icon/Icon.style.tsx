import { ReactSVG } from "react-svg";
import styled from "styled-components";

export const IconWrapper = styled(ReactSVG)`
  width: 1.5rem;
  height: 1.5rem;
  & > div,
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;