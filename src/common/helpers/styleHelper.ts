import { palette } from "../constants/styleConstant";
import { Color, PaletteToken } from "../constants/styleEnum";
import { TStyleProps } from "../types/styleType";

export const paletteHelper = (paletteToken: PaletteToken) => {
  return (props: TStyleProps): Color => {
    return palette[props.theme][paletteToken];
  }
}