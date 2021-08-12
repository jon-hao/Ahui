export enum Theme {
  Light = 0,
  Dark,
}

export enum BackgroundColor {
  Light1 = "#F5F5F7",
  Light2 = "#F5F5F7",
  Dark1 = "#1F1D2B",
  Dark2 = "#252836",
}

export enum Color {
  DarkTitle = "#FFFFFF",
  DarkText = "#808191",
  DarkTextActive = "#FFFFFF",
  DarkIconActive = "#6C5ECF",
  LightTitle = "#212121",
  LightText = "#808191",
  LightTextActive = "#FFFFFF",
  LightIconActive = "#6C5ECF",
}

export enum Shadow {
  Normal = "0 2px 6px rgb(33 33 38 / 20%);",
  Down1 = "0px 1px 2px -2px rgba(0, 0, 0, 0.16), 0px 3px 6px 0px rgba(0, 0, 0, 0.12), 0px 5px 12px 4px rgba(0, 0, 0, 0.09)",
  Down2 = "0px 3px	6px	-4px rgba(0, 0, 0, 0.12), 0px 6px	16px	0px rgba(0, 0, 0, 0.08), 0px 9px	28px	8px rgba(0, 0, 0, 0.05)",
  Down3 = "0px 6px	16px -8px rgba(0, 0, 0, 0.08), 0px 9px	28px 0px rgba(0, 0, 0, 0.05), 0px 12px 48px 16px rgba(0, 0, 0, 0.03)",
}

export enum FontSize {
  Title = "30px",
  Label = "24px",
  Text = "14px",
}

export enum FontWeight {
  Title = 500,
  Label = 300,
}

export enum LineHeight {
  Title = "30px",
  Label = "24px",
  Text = "14px",
}

export enum BreakPoint {
  Desktop = 1024,
  Tablet = 1023,
  Mobile = 767,
}

export enum Media {
  Desktop = "@media (min-width: 1025px)",
  Tablet = "@media (max-width: 1024px) and (min-width: 768px)",
  Mobile = "@media (max-width: 767px)",
}

export enum Width {
  Max = "1140px",
}
