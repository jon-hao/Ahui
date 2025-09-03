import styled from "styled-components";
import { PaletteToken, RadiusToken, paletteHelper, radiusHelp } from "@jon-hao/ahkite";

export const ToolsWrapper = styled.div`
  background-color: ${paletteHelper(PaletteToken.BackgroundSecondary)};
  ${radiusHelp(RadiusToken.Large)};
  position: absolute;
  right: 1.5rem;
  top: 4rem;
  padding: 0.64rem;
  cursor: pointer;
  svg {
    fill: ${paletteHelper(PaletteToken.FontColorSecondary)};
    stroke: ${paletteHelper(PaletteToken.FontColorSecondary)};
  }
  .dark svg {
    fill: ${paletteHelper(PaletteToken.FontColorPrimary)};
    stroke: ${paletteHelper(PaletteToken.FontColorPrimary)};
  }
`;