import { TContour, TPalette, TRadius, TTypography } from "../types/styleType";
import {
  Color,
  ContourToken,
  PaletteToken,
  RadiusToken,
  Theme,
  TypographyToken,
} from "./styleEnum";

export const defaultPalette: TPalette = {
  [Theme.Light]: {
    [PaletteToken.BackgroundPrimary]: Color.MysticGray,
    [PaletteToken.ColorPrimary]: Color.CharcoalBlack,
    [PaletteToken.ColorSuccess]: Color.EmeraldGreen,
    [PaletteToken.ColorActive]: Color.SkyBlue,
    [PaletteToken.ColorSecondary]: Color.AmberOrange,
    [PaletteToken.ColorImportant]: Color.CrimsonRed,
    [PaletteToken.ColorDisable]: Color.SlateGray,
  },
  [Theme.Dark]: {
    [PaletteToken.BackgroundPrimary]: Color.MidnightBlack,
    [PaletteToken.ColorPrimary]: Color.PureWhite,
    [PaletteToken.ColorSuccess]: Color.LimeGreen,
    [PaletteToken.ColorActive]: Color.FireEngineRed,
    [PaletteToken.ColorSecondary]: Color.AmberOrange,
    [PaletteToken.ColorImportant]: Color.CrimsonRed,
    [PaletteToken.ColorDisable]: Color.SlateGray,
  },
};

export const defaultTypography: TTypography = {
  [TypographyToken.Title]: {
    lineHeight: "2.75rem",
    fontSize: "2.125rem",
    fontWeight: "500",
  },
  [TypographyToken.SubTitle]: {
    lineHeight: "2.25rem",
    fontSize: "1.5rem",
    fontWeight: "500",
  },
  [TypographyToken.Tab]: {
    lineHeight: "1.75rem",
    fontSize: "1.25rem",
    fontWeight: "500",
  },
  [TypographyToken.Label]: {
    lineHeight: "1.5rem",
    fontSize: "1rem",
    fontWeight: "300",
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
