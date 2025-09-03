import styled from "styled-components";
import { PaletteToken, TypographyToken, paletteHelper, typographyHelp } from "@jon-hao/ahkite";

export const NavWrapper = styled.div`
  flex: 0 0 15rem;
  background-color: ${paletteHelper(PaletteToken.BackgroundSecondary)};
  &.closed {
    flex: 0 0 3.5rem;
  }
`;

export const Logo = styled.div`
  ${typographyHelp(TypographyToken.Label)};
  padding: 1rem 2rem;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  & > * {
    margin-right: 0.75rem;
  }
  &.closed {
    & > * {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 0;
    }
  }
`;

export const Navigates = styled.div`
  margin-top: 1rem;
  & > div:not(:last-child) {
    margin-bottom: 1.25rem;
  }
`;

export const Navigate = styled.div`
  width: 100%;
  height: 2.25rem;
  color: ${paletteHelper(PaletteToken.FontColorSecondary)};
  display: flex;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
  cursor: pointer;
  ${typographyHelp(TypographyToken.Label)};
  font-weight: 600;
  svg {
    stroke: ${paletteHelper(PaletteToken.FontColorSecondary)};
  }
  &.active {
    color: ${paletteHelper(PaletteToken.FontColorPrimary)};
    border-right: 0.25rem solid ${paletteHelper(PaletteToken.ColorPrimary)};
    svg {
      stroke: ${paletteHelper(PaletteToken.ColorPrimary)};
    }
  }
  & > * {
    margin-right: 0.75rem;
  }
  &.closed {
    display: flex;
    justify-content: center;
    align-items: center;
    & > * {
      margin-right: 0;
    }
  }
`;