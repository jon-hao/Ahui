import { Color, PaletteToken, Theme } from "../constants/styleEnum";

export type TPalette = Record<Theme, Record<PaletteToken, Color>>;

export type TStyleProps = {
  theme: Theme;
}