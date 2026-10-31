"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";

type Theme = "light" | "dark";

type ThemeAction = { type: "set"; value: Theme };

function themeReducer(_state: Theme, action: ThemeAction): Theme {
  return action.value;
}

const ThemeContext = createContext<{
  theme: Theme;
  toggleTheme: () => void;
} | undefined>(undefined);

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, dispatch] = useReducer(themeReducer, "light");

  useEffect(() => {
    const root = window.document.documentElement;
    dispatch({
      type: "set",
      value: root.classList.contains("dark") ? "dark" : "light",
    });
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = window.document.documentElement;
    root.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    dispatch({ type: "set", value: next });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
