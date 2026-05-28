"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_THEME_MODE,
  type ThemeMode,
  applyTheme,
  readStoredTheme,
  resolveDark,
  THEME_STORAGE_KEY,
} from "@/lib/theme";

type ThemeContextValue = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  resolved: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(DEFAULT_THEME_MODE);
  const [resolved, setResolved] = useState<"light" | "dark">("light");

  const sync = useCallback((next: ThemeMode) => {
    applyTheme(next);
    setResolved(resolveDark(next) ? "dark" : "light");
  }, []);

  useEffect(() => {
    const stored = readStoredTheme();
    setModeState(stored);
    sync(stored);
  }, [sync]);

  useEffect(() => {
    if (mode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => sync("system");
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [mode, sync]);

  const setMode = useCallback(
    (next: ThemeMode) => {
      setModeState(next);
      try {
        localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        /* ignore */
      }
      sync(next);
    },
    [sync],
  );

  const value = useMemo(() => ({ mode, setMode, resolved }), [mode, setMode, resolved]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
