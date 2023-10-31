import styled from "styled-components";
import { PaletteToken, TypographyToken, paletteHelper, typographyHelp } from "src/common";

export const PageFrameWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${paletteHelper(PaletteToken.BackgroundPrimary)};
  color: ${paletteHelper(PaletteToken.FontColorPrimary)};
`;

export const ContentWrapper = styled.div`
  flex: auto;
  padding: 50px 20px 30px 30px;
`;

export const PageTitle = styled.h2`
  ${typographyHelp(TypographyToken.Title)};
  margin-bottom: 2rem;
`