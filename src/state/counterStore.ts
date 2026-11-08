import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

type CounterState = {
  content: string;
  skipSpaces: boolean;
  limitOn: boolean;
  maxChars: number;
  theme: Theme;
  setContent: (value: string) => void;
  toggleSkipSpaces: () => void;
  toggleLimit: () => void;
  setMaxChars: (value: number) => void;
  toggleTheme: () => void;
};

function getStartTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export const useCounterStore = create<CounterState>()(
  persist(
    (set) => ({
      content: "",
      skipSpaces: false,
      limitOn: false,
      maxChars: 0,
      theme: getStartTheme(),
      setContent: (value) => set({ content: value }),
      toggleSkipSpaces: () => set((state) => ({ skipSpaces: !state.skipSpaces })),
      toggleLimit: () => set((state) => ({ limitOn: !state.limitOn })),
      setMaxChars: (value) => set({ maxChars: value }),
      toggleTheme: () => set((state) => ({ theme: state.theme === "dark" ? "light" : "dark" })),
    }),
    {
      name: "counter-theme",
      partialize: (state) => ({ theme: state.theme }),
    },
  ),
);
