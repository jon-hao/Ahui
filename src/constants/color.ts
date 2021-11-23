export enum Theme {
  Light = "light",
  Dark = "dark",
}

export enum Background {
  LightPrimary = "#FFFFFF",
  LightSecondary = "#F5F5F7",
  LightButton = "#F5F5F7",
  DarkPrimary = "#FFFFFF",
  DarkSecondary = "#F5F5F7",
  DarkButton = "#F5F5F7",
}

export enum Color {
  LightTitle = "#212121",
  LightText = "#666666",
  LightDescription = "#9E9E9E",
  DarkTitle = "#212121",
  DarkText = "#666666",
  DarkDescription = "#9E9E9E",
}

export enum Shadow {
  LightPrimary = "0px 1px 2px -2px rgba(0, 0, 0, 0.16), 0px 3px 6px 0px rgba(0, 0, 0, 0.12), 0px 5px 12px 4px rgba(0, 0, 0, 0.09)",
  LightSecondary = "0px 3px	6px	-4px rgba(0, 0, 0, 0.12), 0px 6px	16px	0px rgba(0, 0, 0, 0.08), 0px 9px	28px	8px rgba(0, 0, 0, 0.05)",
  LightThird = "0px 6px	16px -8px rgba(0, 0, 0, 0.08), 0px 9px	28px 0px rgba(0, 0, 0, 0.05), 0px 12px 48px 16px rgba(0, 0, 0, 0.03)",
  DarkPrimary = "0px 1px 2px -2px rgba(0, 0, 0, 0.16), 0px 3px 6px 0px rgba(0, 0, 0, 0.12), 0px 5px 12px 4px rgba(0, 0, 0, 0.09)",
  DarkSecondary = "0px 3px	6px	-4px rgba(0, 0, 0, 0.12), 0px 6px	16px	0px rgba(0, 0, 0, 0.08), 0px 9px	28px	8px rgba(0, 0, 0, 0.05)",
  DarkThird = "0px 6px	16px -8px rgba(0, 0, 0, 0.08), 0px 9px	28px 0px rgba(0, 0, 0, 0.05), 0px 12px 48px 16px rgba(0, 0, 0, 0.03)",
}

export enum Border {
  Light = "1px solid #F0F0F0",
  Dark = "1px solid #F0F0F0",
}

export type TColor = {
  background: {
    primary: Background;
    secondary: Background;
    button: Background;
  };
  color: {
    title: Color;
    text: Color;
    description: Color;
  };
  shadow: {
    primary: Shadow;
    secondary: Shadow;
    third: Shadow;
  };
  border: Border;
};

type TColorMap = {
  [key in Theme]?: TColor;
};

export const ColorMap: TColorMap = {
  [Theme.Light]: {
    background: {
      primary: Background.LightPrimary,
      secondary: Background.LightSecondary,
      button: Background.LightButton
    },
    color: {
      title: Color.LightTitle,
      text: Color.LightText,
      description: Color.LightDescription,
    },
    shadow: {
      primary: Shadow.LightPrimary,
      secondary: Shadow.LightSecondary,
      third: Shadow.LightThird,
    },
    border: Border.Light,
  },
  [Theme.Dark]: {
    background: {
      primary: Background.DarkPrimary,
      secondary: Background.DarkSecondary,
      button: Background.DarkButton
    },
    color: {
      title: Color.DarkTitle,
      text: Color.DarkText,
      description: Color.DarkDescription,
    },
    shadow: {
      primary: Shadow.DarkPrimary,
      secondary: Shadow.DarkSecondary,
      third: Shadow.DarkThird,
    },
    border: Border.Dark,
  },
};
