// @ts-nocheck
import style from "../assets/style/variable.module.scss";

export enum Theme {
  Light = style.themeLight,
  Dark = style.themeDark,
}

export enum Color {
  BackgroundPrimary = style.backgroundPrimary,
  ColorPrimary = style.colorPrimary,
  ColorSuccess = style.colorSuccess,
  ColorActive = style.colorActive,
  ColorSecondary = style.colorSecondary,
  ColorImportant = style.colorImportant,
  ColorDisable = style.colorDisable,
}

export enum Media {
  Desktop = style.mediaDesktop,
  Tablet = style.mediaTablet,
  Mobile = style.mediaMobile,
}

export enum BreakPoint {
  Tablet = style.breakTablet,
  Mobile = style.breakMobile,
}
