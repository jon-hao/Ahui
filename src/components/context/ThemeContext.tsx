import React, { useState } from "react";
import { ColorMap, Theme } from "../../constants/color";

export const ThemeContext = React.createContext({
  colorMap: ColorMap[Theme.Light],
} as any);

export const ThemeProvider: React.FC = ({ children }) => {
  const [colorMap, setColorMap] = useState(ColorMap[Theme.Light]);

  return (
    <ThemeContext.Provider
      value={{
        colorMap,
        setColorMap: (theme: Theme) => setColorMap(ColorMap[theme]),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
