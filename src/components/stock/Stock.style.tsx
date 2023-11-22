import { paletteHelper, PaletteToken, radiusHelp, RadiusToken } from "src/common";
import { styled } from "styled-components";

export const StockWrapper = styled.section`
  background-color: ${paletteHelper(PaletteToken.BackgroundSecondary)};
  ${radiusHelp(RadiusToken.Large)};
  padding: 1rem 1.5rem 0.8rem 1.5rem;
`;