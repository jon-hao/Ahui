import styled from "styled-components";
import { PaletteToken, RadiusToken, paletteHelper, radiusHelp } from "src/common";

export const ToolsWrapper = styled.div`
  background-color: ${paletteHelper(PaletteToken.BackgroundSecondary)};
  ${radiusHelp(RadiusToken.Large)};
  position: absolute;
  right: 1.5rem;
  top: 4rem;
  padding: 0.64rem;
  svg {
    cursor: pointer;
  }
`;