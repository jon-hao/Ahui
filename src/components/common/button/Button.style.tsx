import styled from "styled-components";
import { TColor } from "../../../constants/color";

export const ButtonWrapper = styled.div<TColor>`
  position: relative;
  background: ${(p) => p.background.primary};
  color: ${(p) => p.color.text};
  padding: 8px 12px;
  box-shadow: ${(p) => p.shadow.primary};
  border-radius: 4px;
`;
