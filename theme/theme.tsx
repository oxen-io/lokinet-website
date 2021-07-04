import React from "react";
import { COLORS } from "../pages/_document";

export const ThemeContext = React.createContext<any>({});

export const LokinetThemeProvider = ({ children }: any) => {
  const [colorMode, rawSetColorMode] = React.useState<string | undefined>(
    undefined
  );
  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    rawSetColorMode(initialColorValue);
  }, []);
  const setColorMode = (newValue: string) => {
    const root = window.document.documentElement;
    // 1. Update React color-mode state
    rawSetColorMode(newValue);
    // 2. Update localStorage
    localStorage.setItem("color-mode", newValue);
    // 3. Update each color
    root.style.setProperty(
      "--color-text",
      newValue === "light" ? COLORS.light.text : COLORS.dark.text
    );
    root.style.setProperty(
      "--color-background",
      newValue === "light" ? COLORS.light.background : COLORS.dark.background
    );
    root.style.setProperty(
      "--color-secondary",
      newValue === "light" ? COLORS.light.secondary : COLORS.dark.secondary
    );
    root.style.setProperty(
      "--color-border-accordion",
      newValue === "light"
        ? COLORS.light.borderAccordion
        : COLORS.dark.borderAccordion
    );
  };
  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
