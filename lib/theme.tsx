"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type ThemeId = "ocean" | "midnight" | "forest" | "sunset";

export interface ThemeOption {
  id: ThemeId;
  label: string;
  accent: string;
  accent2: string;
}

export const themes: ThemeOption[] = [
  { id: "ocean",    label: "Ocean",    accent: "#1b63e8", accent2: "#f5b800" },
  { id: "midnight", label: "Midnight", accent: "#7c3aed", accent2: "#06b6d4" },
  { id: "forest",   label: "Forest",   accent: "#059669", accent2: "#f97316" },
  { id: "sunset",   label: "Sunset",   accent: "#e11d48", accent2: "#f59e0b" },
];

interface ThemeContextValue {
  theme: ThemeId;
  setTheme: (t: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "ocean",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>("ocean");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as ThemeId | null;
    if (saved && themes.some((t) => t.id === saved)) {
      setThemeState(saved);
      document.documentElement.setAttribute("data-theme", saved);
    }
  }, []);

  const setTheme = (t: ThemeId) => {
    setThemeState(t);
    localStorage.setItem("portfolio-theme", t);
    document.documentElement.setAttribute("data-theme", t);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
