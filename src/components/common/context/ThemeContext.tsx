import React, { useState } from "react";
import { Theme } from "../../../constants/style";

export const ThemeContext = React.createContext({
  theme: Theme.Dark,
} as any);

export const ThemeProvider: React.FC = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(Theme.Dark);

  return (
    <ThemeContext.Provider
      value={{
        theme: currentTheme,
        setTheme: (theme: Theme) => setCurrentTheme(theme),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
