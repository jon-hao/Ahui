import { TContour, TPalette, TRadius, TTypography } from "../types/styleType";
import {
  ContourToken,
  PaletteToken,
  RadiusToken,
  Theme,
  TypographyToken,
} from "./styleEnum";

export const defaultPalette: TPalette = {
  [Theme.Light]: {
    [PaletteToken.BackgroundPrimary]: "#F4F7FE",
    [PaletteToken.BackgroundSecondary]: "#FFFFFF",
    [PaletteToken.FontColorPrimary]: "#2B3674",
    [PaletteToken.FontColorSecondary]: "#A3AED0",
    [PaletteToken.ColorPrimary]: "#4318FF",
    [PaletteToken.ColorSecondary]: "#6AD2FF",
    [PaletteToken.ColorThird]: "#EFF4FB",
    [PaletteToken.ColorCorrect]: "#05CD99",
    [PaletteToken.ColorWarning]: "#FFCE20",
    [PaletteToken.ColorError]: "#EE5D50",
    [PaletteToken.ColorPositive]: "#05CD99",
    [PaletteToken.ColorNegative]: "#EE5D50",
  },
  [Theme.Dark]: {
    [PaletteToken.BackgroundPrimary]: "#0B1437",
    [PaletteToken.BackgroundSecondary]: "#111C44",
    [PaletteToken.FontColorPrimary]: "#FFFFFF",
    [PaletteToken.FontColorSecondary]: "#A3AED0",
    [PaletteToken.ColorPrimary]: "#4318FF",
    [PaletteToken.ColorSecondary]: "#6AD2FF",
    [PaletteToken.ColorThird]: "#EFF4FB",
    [PaletteToken.ColorCorrect]: "#05CD99",
    [PaletteToken.ColorWarning]: "#FFCE20",
    [PaletteToken.ColorError]: "#EE5D50",
    [PaletteToken.ColorPositive]: "#05CD99",
    [PaletteToken.ColorNegative]: "#EE5D50",
  },
};

export const defaultTypography: TTypography = {
  [TypographyToken.Title]: {
    lineHeight: "2.75rem",
    fontSize: "2.125rem",
    fontWeight: "600",
  },
  [TypographyToken.SubTitle]: {
    lineHeight: "2.25rem",
    fontSize: "1.5rem",
    fontWeight: "600",
  },
  [TypographyToken.Tab]: {
    lineHeight: "1.75rem",
    fontSize: "1.25rem",
    fontWeight: "600",
  },
  [TypographyToken.Label]: {
    lineHeight: "1.5rem",
    fontSize: "1rem",
    fontWeight: "600",
  },
  [TypographyToken.Content]: {
    lineHeight: "1.5rem",
    fontSize: "1rem",
    fontWeight: "300",
  },
  [TypographyToken.Tips]: {
    lineHeight: "1rem",
    fontSize: "0.75rem",
    fontWeight: "100",
  },
};

export const defaultContour: TContour = {
  [ContourToken.Primary]: {
    shadow:
      "0px 1px 2px -2px rgba(0, 0, 0, 0.16), 0px 3px 6px 0px rgba(0, 0, 0, 0.12), 0px 5px 12px 4px rgba(0, 0, 0, 0.09)",
  },
  [ContourToken.Secondary]: {
    shadow:
      "0px 3px	6px	-4px rgba(0, 0, 0, 0.12), 0px 6px	16px	0px rgba(0, 0, 0, 0.08), 0px 9px	28px	8px rgba(0, 0, 0, 0.05)",
  },
  [ContourToken.Third]: {
    shadow:
      "0px 6px	16px -8px rgba(0, 0, 0, 0.08), 0px 9px	28px 0px rgba(0, 0, 0, 0.05), 0px 12px 48px 16px rgba(0, 0, 0, 0.03)",
  },
};

export const defaultRadius: TRadius = {
  [RadiusToken.Large]: "0.75rem",
  [RadiusToken.Medium]: "0.5rem",
  [RadiusToken.Small]: "0.25rem",
};
