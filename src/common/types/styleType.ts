import {
  Color,
  ContourToken,
  PaletteToken,
  RadiusToken,
  Theme,
  TypographyToken,
} from "../constants/styleEnum";

export type TPalette = Record<Theme, Record<PaletteToken, Color | string>>;

export type TTypography = Record<
  TypographyToken,
  {
    lineHeight: string;
    fontSize: string;
    fontWeight: string;
  }
>;

export type TContour = Record<
  ContourToken,
  {
    shadow: string;
  }
>;

export type TRadius = Record<RadiusToken, string>;

export type TStyleProps = {
  theme: {
    current: Theme;
    palette: TPalette;
    typography: TTypography;
    contour: TContour;
    radius: TRadius;
  };
};
