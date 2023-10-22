import React from "react";
import { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Theme } from "../constants/styleEnum";
import { TContour, TPalette, TRadius, TTypography } from "../types/styleType";
import {
  defaultContour,
  defaultPalette,
  defaultRadius,
  defaultTypography,
} from "../constants/styleConstant";

type TProps = {
  children: React.ReactNode;
  theme?: Theme;
  palette?: TPalette;
  typography?: TTypography;
  contour?: TContour;
  radius?: TRadius;
};

type TContext = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export const AhKiteContext = createContext<TContext>({
  theme: Theme.Light,
  setTheme: () => {},
});

export const AhKite: React.FC<TProps> = ({
  children,
  theme: defaultTheme = Theme.Light,
  palette = defaultPalette,
  typography = defaultTypography,
  contour = defaultContour,
  radius = defaultRadius,
}) => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <AhKiteContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <ThemeProvider
        theme={{ current: theme, palette, typography, contour, radius }}
      >
        {children}
      </ThemeProvider>
    </AhKiteContext.Provider>
  );
};
