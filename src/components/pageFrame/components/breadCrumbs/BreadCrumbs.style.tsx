import styled from "styled-components";
import { PaletteToken, TypographyToken, paletteHelper, typographyHelp } from "src/common";

export const BreadCrumbsWrapper = styled.div`
  ${typographyHelp(TypographyToken.Tips)};
  color: ${paletteHelper(PaletteToken.FontColorSecondary)};
`;