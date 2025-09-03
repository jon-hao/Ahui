import styled from "styled-components";
import { PaletteToken, TypographyToken, paletteHelper, typographyHelp } from "@jon-hao/ahkite";

export const BreadCrumbsWrapper = styled.div`
  ${typographyHelp(TypographyToken.Tips)};
  color: ${paletteHelper(PaletteToken.FontColorSecondary)};
`;