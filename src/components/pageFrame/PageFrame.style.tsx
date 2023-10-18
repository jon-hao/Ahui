import styled from "styled-components";
import { PaletteToken, paletteHelper } from "@albatrosses/ahui";

export const PageFrameWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const NavWrapper = styled.nav`
  flex: 0 0 200px;
  background-color: ${paletteHelper(PaletteToken.BackgroundPrimary)};
`;

export const ContentWrapper = styled.div`
  flex: auto;
`;