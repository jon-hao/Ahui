import React from "react";
import { createContext, useState } from "react";
import { RouterProvider } from "./RouterContext";
import { ThemeProvider } from "styled-components";
import { Theme } from "../constants/styleEnum";
import { TContour, TPalette, TRadius, TTypography } from "../types/styleType";
import {
  defaultContour,
  defaultPalette,
  defaultRadius,
  defaultTypography,
} from "../constants/styleConstant";
import { TRoute } from "../constants/routerEnum";

type TProps = {
  children: React.ReactNode;
  theme?: Theme;
  palette?: TPalette;
  typography?: TTypography;
  contour?: TContour;
  radius?: TRadius;
  routes?: TRoute[];
  icons?: Record<string, string>;
};

type TContext = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  icons: Record<string, string>;
};

export const AhKiteContext = createContext<TContext>({
  theme: Theme.Light,
  setTheme: () => {},
  icons: {}
});

export const AhKite: React.FC<TProps> = ({
  children,
  theme: defaultTheme = Theme.Light,
  palette = defaultPalette,
  typography = defaultTypography,
  contour = defaultContour,
  radius = defaultRadius,
  routes = [],
  icons = {}
}) => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <AhKiteContext.Provider
      value={{
        theme,
        setTheme,
        icons,
      }}
    >
      <RouterProvider routes={routes}>
        <ThemeProvider
          theme={{ current: theme, palette, typography, contour, radius }}
        >
          {children}
        </ThemeProvider>
      </RouterProvider>
    </AhKiteContext.Provider>
  );
};
