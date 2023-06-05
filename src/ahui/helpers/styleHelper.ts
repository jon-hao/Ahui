import {
  Color,
  ContourToken,
  PaletteToken,
  RadiusToken,
  TypographyToken,
} from "../constants/styleEnum";
import { TStyleProps } from "../types/styleType";

export const paletteHelper = (paletteToken: PaletteToken): any => {
  return (props: TStyleProps): Color | string => {
    return props.theme.palette[props.theme.current][paletteToken];
  };
};

export const typographyHelp = (typographyToken: TypographyToken): any => {
  return (props: TStyleProps): string => {
    const { lineHeight, fontSize, fontWeight } =
      props.theme.typography[typographyToken];
    return `
      line-height: ${lineHeight};
      font-size: ${fontSize};
      font-weight: ${fontWeight};
    `;
  };
};

export const contourHelp = (contourToken: ContourToken): any => {
  return (props: TStyleProps): string => {
    const { shadow } = props.theme.contour[contourToken];
    return `
      box-shadow: ${shadow};
    `;
  };
};

export const radiusHelp = (radiusToken: RadiusToken): any => {
  return (props: TStyleProps): string => {
    return `
      border-radius: ${props.theme.radius[radiusToken]};
    `;
  };
};
