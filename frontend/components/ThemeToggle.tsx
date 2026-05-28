"use client";

import { useTheme } from "@/components/ThemeProvider";
import type { ThemeMode } from "@/lib/theme";

const MODES: { mode: ThemeMode; label: string; short: string }[] = [
  { mode: "system", label: "System theme", short: "Auto" },
  { mode: "light", label: "Light theme", short: "Light" },
  { mode: "dark", label: "Dark theme", short: "Dark" },
];

export function ThemeToggle() {
  const { mode, setMode } = useTheme();

  return (
    <div className="theme-toggle" role="group" aria-label="Color theme">
      {MODES.map((m) => (
        <button
          key={m.mode}
          type="button"
          title={m.label}
          aria-label={m.label}
          aria-pressed={mode === m.mode}
          onClick={() => setMode(m.mode)}
          className={mode === m.mode ? "theme-toggle-btn is-active" : "theme-toggle-btn"}
        >
          {m.short}
        </button>
      ))}
    </div>
  );
}
