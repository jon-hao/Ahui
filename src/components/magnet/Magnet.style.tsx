import styled from "styled-components";
import { PaletteToken, RadiusToken, paletteHelper, radiusHelp } from "src/common";

export const MagnetWrapper = styled.div`
  background-color: ${paletteHelper(PaletteToken.BackgroundSecondary)};
  ${radiusHelp(RadiusToken.Large)};
  display: flex;
  padding: 20px 12px 20px 16px;
  justify-content: flex-end;
  align-items: flex-start;
`;